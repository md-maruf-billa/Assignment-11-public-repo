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
import ManageServices from "../manageServices/ManageServices";
import UpdateService from "../updateService/UpdateService";

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
                loader: ({ params }) => fetch(`http://localhost:7000/service/${params.id}`)
            },
            {
                path: "/all-services",
                element: <AllServices />,
                loader: () => fetch(`http://localhost:7000/all-services`)
            },
            {
                path: "/manage-services",
                element: <PrivetRoute><ManageServices /></PrivetRoute>
            },
            {
                path: "/update-service/:id",
                element: <PrivetRoute><UpdateService /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:7000/service/${params.id}`)
            }
        ]
    }
])

export default Routes;

// "/add-services
// "/manage-services
// "/booked-services
// "/service-to-do