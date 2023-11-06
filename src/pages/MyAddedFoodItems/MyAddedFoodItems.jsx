import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const MyAddedFoodItems = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [myAddedFoods, setMyAddedFoods] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/myAddedFoods?email=${user?.email}`)
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
        <div>
            <p>implement search functionality</p>
            <div className="my-10">
                {
                    myAddedFoods?.map(myAddedFood => <div key={myAddedFood._id}>


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


                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAddedFoodItems;