import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-food-items',
                element: <AllFoodItems></AllFoodItems>
            }, 
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            }
        ]
    }
])

export default router;