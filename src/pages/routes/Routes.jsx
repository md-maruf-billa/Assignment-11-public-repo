import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Layout from "../layout/Layout";
import Error from "../error/Error";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default Routes;