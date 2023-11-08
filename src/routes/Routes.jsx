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
import MyOrderedFood from "../pages/MyOrderedFood/MyOrderedFood";
import Breakfast from "../components/HomeComponents/Breakfast/Breakfast";
import Lunch from "../components/HomeComponents/Lunch/Lunch";
import Dinner from "../components/HomeComponents/Dinner/Dinner";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                    {
                        path:'/',
                        element:<Breakfast></Breakfast>
                    },
                    {
                        path:'/lunch',
                        element:<Lunch></Lunch>
                    },
                    {
                        path:'/dinner',
                        element:<Dinner></Dinner>
                    }
                ]
            },
            {
                path: '/all-food-items',
                element: <AllFoodItems></AllFoodItems>,
                loader:()=>fetch('http://localhost:5000/api/v1/totalFood')
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
            },
            {
                path:'/ordered-food',
                element:<MyOrderedFood></MyOrderedFood>,
            }
        ]

    }
])

export default router;