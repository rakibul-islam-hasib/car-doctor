import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/user/Login";
import Register from "../components/pages/user/Register";
import Checkout from "../components/pages/checkout/Checkout";
import Booking from "../components/pages/orders/Booking";
import Privet from "./Privet";

export const router = createBrowserRouter([
    {
        path : '/', 
        element : <App />, 
        children:[
            {
                path : '/', 
                element: <Home /> 
            },
            {
                path:'/checkout/:id', 
                element:<Checkout /> ,
                loader : ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }, 
            {
                path : 'bookings',
                element : <Privet><Booking /> </Privet>
            }
        ],
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    }
])
