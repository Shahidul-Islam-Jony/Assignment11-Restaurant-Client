
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";


const FoodPurchase = () => {
    const food = useLoaderData();
    // console.log(food);
    const {user} = useContext(AuthContext);
    console.log(user);

    const {  name, price, quantity } = food;

    const handlePurchaseFood = e => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const description = form.description.value;
        const food_origin = form.food_origin.value;
        const image = form.image.value;
        const made_by = form.made_by.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;

        const newFood = { category, count: 0, description, food_origin, image, made_by, name, price, quantity }
        console.log(newFood);

    }

    return (
        <div className="my-10">
            <form onSubmit={handlePurchaseFood}>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Food Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Food name" defaultValue={name} className="input rounded-md w-full border-pink-600" required />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="category" defaultValue={price} className="input rounded-md w-full border-pink-600" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" defaultValue={quantity} className="input rounded-md w-full border-pink-600" required />
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