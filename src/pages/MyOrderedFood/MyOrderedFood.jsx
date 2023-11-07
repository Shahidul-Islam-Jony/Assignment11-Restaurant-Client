import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';

const MyOrderedorderedFood = () => {
    const { user } = useContext(AuthContext);
    const [orderedorderedFoods, setOrderedorderedFoods] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/get-user-orders?email=${user?.email}`)
            .then(result => {
                // console.log(result.data);
                setOrderedorderedFoods(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user?.email])

    console.log(orderedorderedFoods);

    return (
        <div className="my-16">
            <h2 className="text-5xl text-center mb-10 font-bold"><span className="border-x-8 border-pink-600 textShadow px-4">Your ordered foods</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    orderedorderedFoods?.map(orderedFood => <div key={orderedFood._id} className="">
                        <div className="card bg-violet-200 border-4 border-pink-400 shadow-xl">
                            <figure><img src={orderedFood.image} className="w-full m-2 h-56 rounded-lg" alt={orderedFood.name} /></figure>
                            <div className="card-body">
                                <h2 className="text-lg font-medium">Food Name : {orderedFood.name}</h2>
                                <p className="font-medium">Food Owner : {orderedFood.foodOwner}</p>
                                <p className="font-medium">Price : $ {orderedFood.price}</p>
                                <p className="font-medium">Quantity : {orderedFood.quantity}</p>
                                <p className="font-medium">Added Date : {orderedFood.date}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/single-orderedFood-item/${orderedFood._id}`} className="btn btn-secondary btn-sm mt-4 font-medium text-lg w-full"><AiFillDelete></AiFillDelete> Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrderedorderedFood;