
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";


const FoodPurchase = () => {
    const food = useLoaderData();
    console.log(food);
    const { user } = useContext(AuthContext);
    console.log(user);
    const { _id, category, description, food_origin, image, made_by, name, price } = food;
    let { count ,quantity} = food;

    const handlePurchaseFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const date = form.date.value;
        const price = form.price.value;
        let quantity = form.quantity.value;

        // if(user.email === buyerEmail){
        //     toast.error('You can not buy your own food', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        //     return;
        // }

        console.log(count,quantity);

        if (quantity !== 0) {
            count += 1;
            quantity -= 1;
        }

        const orderedFood = { count, name, price, quantity, buyerName, buyerEmail, date }
        // console.log(orderedFood);

        const updateFood = { category, description, count, food_origin, image, made_by, name, price, quantity }

        axios.post('http://localhost:5000/api/v1/user-orders', orderedFood)
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

        axios.patch(`http://localhost:5000/api/v1/updateFood/${_id}`, updateFood)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="my-10">
            <form onSubmit={handlePurchaseFood}>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Food Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Food name" defaultValue={name} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="category" defaultValue={price} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" defaultValue={quantity} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Buyer Name</span>
                        </label>
                        <input type="text" name='buyerName' placeholder="buyer_name" defaultValue={user?.displayName} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Buyer Email</span>
                        </label>
                        <input type="text" name='buyerEmail' placeholder="buyer_email" defaultValue={user?.email} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Buying Date</span>
                        </label>
                        <input type="date" name='date' defaultValue={Date} className="input rounded-md w-full border-pink-600" required />
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button className="btn btn-secondary w-full">Purchase</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );

};

export default FoodPurchase;