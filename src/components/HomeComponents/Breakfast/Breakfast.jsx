import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";

const Breakfast = () => {
    const { user } = useContext(AuthContext);
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;

    const { isPending, data: foods } = useQuery({
        queryKey: ['breakfast'],
        queryFn: async () => {
            const res = await fetch('breakfast.json')
            return res.json();
        }
    })
    if (isPending) {
        return <div className="flex justify-center mt-5">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }
    // console.log(foods);

    const handlePurchaseFood = (id) => {
        const food = foods.find(food => food._id === id);
        // console.log(food);
        const { name, image, price, quantity, count, made_by } = food;
        const orderedFood = { count, name, price: price, quantity: quantity, buyerName, buyerEmail, foodOwner: made_by, image }

        if (user.email === made_by) {
            toast.error('You can not buy your own food', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        axios.post('https://assignment-11-server-mauve.vercel.app/api/v1/user-orders', orderedFood)
            .then(result => {
                console.log(result);
                toast.success('Food Purchase Successful !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            })

    }

    return (
        <div>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 flex-wrap gap-4">
                    {
                        foods?.map(food => <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={food._id}>
                            <div className="card relative bg-violet-200 border-4 border-pink-400 shadow-xl">
                                <figure><img src={food.image} className="w-full m-2 h-56 rounded-lg" alt={food.name} /></figure>
                                <div className="card-body absolute">
                                    <h2 className="card-title bg-green-500 px-2 rounded-md">Name : {food.name}</h2>
                                    <p className="font-medium bg-pink-400 px-2 rounded-md">Price : $ {food.price}</p>
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <button onClick={() => handlePurchaseFood(food._id)} className="bg-pink-600 btn btn-sm text-white">Purchase</button>
                                </div>
                            </div>
                        </motion.div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Breakfast;