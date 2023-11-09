// import { useEffect, useState } from "react";
import "../../../../src/index.css"
import { Link } from "react-router-dom";
// import axios from "axios";
import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

const TopFood = () => {
    const { isPending, data: topFoods } = useQuery({
        queryKey: ['TopFood'],
        queryFn: async () => {
            const res = await axios.get('https://assignment-11-server-mauve.vercel.app/api/v1/sorted-food')
            return res.data;
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

    return (
        <div className="mt-16">
            <h2 className="text-5xl text-center mb-10 font-bold"><span className="border-x-8 border-pink-600 textShadow px-4">Top Foods</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    topFoods?.map(food => <motion.div whileHover={{ scale: 1.1 }} key={food._id}>
                        <div className="card bg-violet-200 border-4 border-pink-400 shadow-xl">
                            <figure><img src={food.image} className="w-full m-2 h-56 rounded-lg" alt={food.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : {food.name}</h2>
                                <p className="font-medium">Category : {food.category}</p>
                                <p className="font-medium">Price : $ {food.price}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/single-food-item/${food._id}`} className="btn btn-secondary font-medium text-lg w-full">Details</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>)
                }
            </div>
            <div className="my-7 text-center">
                <Link to='/all-food-items' className="btn btn-secondary w-72">See All</Link>
            </div>
        </div>
    );
};

export default TopFood;