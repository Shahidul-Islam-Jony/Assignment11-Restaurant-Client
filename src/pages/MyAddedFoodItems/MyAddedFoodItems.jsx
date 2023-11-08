import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import DynamicTitle from "../../components/sharedComponents/DynamicTitle";
import { RotatingLines } from "react-loader-spinner";

const MyAddedFoodItems = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [myAddedFoods, setMyAddedFoods] = useState([]);

    useEffect(() => {
        axios.get(`https://assignment-11-server-mauve.vercel.app/api/v1/myAddedFoods?email=${user?.email}`, { withCredentials: true })
            .then(result => {
                // console.log(result.data);
                setMyAddedFoods(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user?.email])

    console.log(myAddedFoods);
    return (
        <HelmetProvider>
            <DynamicTitle title='Food-Fantasia | My-Added-Food'></DynamicTitle>
            <div className="my-10">
                {
                    myAddedFoods ? myAddedFoods.map(myAddedFood => <div key={myAddedFood._id}>


                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-lg font-sans text-pink-600">
                                        <th>Food image</th>
                                        <th>Food Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="text-xl bg-slate-200">
                                        <td className="md:w-96 rounded-l-xl">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-28 h-28">
                                                    <img src={myAddedFood.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="md:w-96">
                                            {myAddedFood.name}
                                        </td>
                                        <td className="md:w-96">$ {myAddedFood.price}</td>
                                        <th className="rounded-r-xl">
                                            <Link to={`/updateFood/${myAddedFood._id}`} className="btn btn-secondary w-28 btn-xs">update</Link>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>) :
                        <div className="flex justify-center mt-10">
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        </div>
                }
            </div>
        </HelmetProvider>
    );
};

export default MyAddedFoodItems;