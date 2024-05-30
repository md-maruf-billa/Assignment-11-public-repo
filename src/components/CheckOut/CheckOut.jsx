import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import Button from '../button/Button';
import Swal from 'sweetalert2';
import { userDataContext } from '../../providers/userAuthProvider/UserAuthProvider';




const CheckOut = ({ price, allBookingData }) => {
    const { currentUser, setLoading } = useContext(userDataContext);
    const [errorMessage, setErrorMessage] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const [stripSecret, setStripSecret] = useState();

    useEffect(() => {
        axios.post(import.meta.env.VITE_API_URL + "/check-payment-info", { price: price })
            .then(res => setStripSecret(res?.data?.clientSecret))
    }, [])

    const handelPayment = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) return setErrorMessage(error.message)
        setErrorMessage("")

        const { paymentIntent, error: err } = await stripe.confirmCardPayment(stripSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: currentUser.displayName,
                    email: currentUser.email
                }
            }
        })
        if (err) return setErrorMessage(err.message)
        else {
            if (paymentIntent.status === "succeeded") {

                axios.post(import.meta.env.VITE_API_URL + "/post-booking", allBookingData)
                    .then(res => {
                        Swal.fire({
                            title: `Successful Pay $ ${allBookingData.price}`,
                            text: "Your Booking is Successfully saved!",
                            icon: "success"
                        });
                        setLoading(true)

                    }).catch(err => {
                        Swal.fire({
                            title: "Opps",
                            text: "Booking save failed something went wrong",
                            icon: "error"
                        });
                    })
            }
        }
    }



    return (

        <form onSubmit={handelPayment} className='mt-8'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            >

            </CardElement>
            {/* ------------ACTION BUTTON------------ */}
            <div className="flex justify-between mt-5">
                <form method="dialog">
                    <button className="btn btn-error btn-outline">Cancel</button>
                </form>
                <div>
                    <button
                        disabled={!allBookingData.bookingDate || !stripe || !stripSecret }
                        className='btn btn-success text-white'
                        type='submit'>
                        $ {allBookingData.price} Pay Now
                    </button>
                </div>
            </div>
            <p className='text-red-600 text-center text-sm mt-4'>{errorMessage}</p>
        </form>
    );
};

export default CheckOut;