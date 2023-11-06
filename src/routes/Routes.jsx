import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyAddedFoodItems from "../pages/MyAddedFoodItems/MyAddedFoodItems";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import AddAFood from "../pages/AddAFood/AddAFood";
import SingleFoodItem from "../pages/SingleFoodItem/SingleFoodItem";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import PrivateRoute from "./PrivateRoute";

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
                path:'/single-food-item/:id',
                element:<SingleFoodItem></SingleFoodItem>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/findSingleFood/${params.id}`)
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
            },{
                path:'/my-added-food-items',
                element:<MyAddedFoodItems></MyAddedFoodItems>
            },
            {
                path:'/updateFood/:id',
                element:<UpdateFood></UpdateFood>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/findSingleFood/${params.id}`)
            },
            {
                path:'/addFood',
                element:<AddAFood></AddAFood>
            },
            {
                path:'/foodPurchase/:id',
                element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/findSingleFood/${params.id}`)
            }
        ]
    }
])

export default router;