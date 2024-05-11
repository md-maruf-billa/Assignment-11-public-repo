import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Layout from "../layout/Layout";
import Error from "../error/Error";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import PrivetRoute from "../../providers/privet/PrivetRoute";
import AddServices from "../addServices/AddServices";
import ServicesDetails from "../servicesDetails/ServicesDetails";
import AllServices from "../allServices/AllServices";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "registration",
                element: <Registration />
            },
            {
                path: "/add-services",
                element: <PrivetRoute><AddServices /></PrivetRoute>
            },
            {
                path: "/service-details/:id",
                element: <PrivetRoute><ServicesDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://househelphub.vercel.app/service/${params.id}`)
            },
            {
                path:"/all-services",
                element:<AllServices/>,
                loader: () => fetch(`https://househelphub.vercel.app/all-services`)
            }
        ]
    }
])

export default Routes;

// "/add-services
// "/manage-services
// "/booked-services
// "/service-to-do