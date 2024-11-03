import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeeDetails from "../Components/CoffeeDetails";

const router = createBrowserRouter([
{
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/categories.json'),
            children: [
                {
                    path: '/category/:category',
                    element: <CoffeeCards></CoffeeCards>,
                    loader: () => fetch('/coffees.json')
                },
            ]
        },
        {
            path: "/coffees",
            element: <Coffees></Coffees>,
            loader: () => fetch('/coffees.json')
        },
        {
            path: "/coffees/:id",
            element: <CoffeeDetails></CoffeeDetails>,
            loader: () => fetch('/coffees.json')
        },

        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
        },
    ]
},
])

export default router;


