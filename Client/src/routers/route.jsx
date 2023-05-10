import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/user/Login";
import Register from "../components/pages/user/Register";

export const router = createBrowserRouter([
    {
        path : '/', 
        element : <App />, 
        children:[
            {
                path : '/', 
                element: <Home /> 
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
