
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";


const FoodPurchase = () => {
    const food = useLoaderData();
    console.log(food);
    const { user } = useContext(AuthContext);
    // console.log(user);
    const { _id, category, description, food_origin, image, made_by, name, price } = food;
    let { count, quantity } = food;
    let [totalPrice, setToatlPrice] = useState(price);
    let orderedCount = 0 ;

    const handlePurchaseFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const date = form.date.value;
        const orderedQuantityString = form.orderedQuantity.value;
        const orderedQuantity = parseInt(orderedQuantityString);

        if (user.email === buyerEmail) {
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

        // console.log(count,quantity);

        if (quantity !== 0) {
            orderedCount += orderedQuantity;
            count += orderedQuantity;
            quantity -= orderedQuantity;
        }
        if (quantity === 0) {
            toast.error('Sorry!! item is not available for now', {
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
        if (count > 20) {
            toast.error('Sorry! You can not buy more than 20', {
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

        const orderedFood = { count:orderedCount, name, price:totalPrice, quantity: orderedQuantity, buyerName, buyerEmail, foodOwner: made_by, date, image }
        // console.log(orderedFood);

        const updateFood = { category, description, count, food_origin, image, made_by, name, price, quantity }
        // console.log(updateFood);

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

    const handleQuantityChange = (e) => {
        // console.log(e.target.value);
        const quantity = parseInt(e.target.value);
        let total = quantity * price;
        // console.log(total);
        setToatlPrice(total)
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
                        <input type="text" name='price' placeholder="category" defaultValue={totalPrice} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Quantity</span>
                        </label>
                        <input type="text" name='orderedQuantity' onChange={handleQuantityChange} placeholder="You can purchase upto 20" defaultValue={1} className="input rounded-md w-full border-pink-600" />
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