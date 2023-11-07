import axios from "axios";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const AddAFood = () => {

    const {user} = useContext(AuthContext);
    // console.log(user.email);
    const handleAddFood = e => {
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

        axios.post('http://localhost:5000/api/v1/addFood', newFood)
            .then(result => {
                console.log(result);
                toast.success('Food Added Successfuly !', {
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
                console.log(error);
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
        <div className="my-10">
            <form onSubmit={handleAddFood}>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Food Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Food name" className="input rounded-md w-full border-pink-600" required />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Food Category</span>
                        </label>
                        <input type="text" name='category' placeholder="category" className="input rounded-md w-full border-pink-600" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Food Image</span>
                        </label>
                        <input type="text" name='image' placeholder="food image url" className="input rounded-md w-full border-pink-600" required />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">food_origin</span>
                        </label>
                        <input type="text" name='food_origin' placeholder="food_origin" className="input rounded-md w-full border-pink-600" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input rounded-md w-full border-pink-600" required />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" className="input rounded-md w-full border-pink-600" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">Add By</span>
                        </label>
                        <input type="text" name='made_by' placeholder="made_by" defaultValue={user?.email} className="input rounded-md w-full border-pink-600" readOnly />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="text-xl font-medium">description</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input rounded-md w-full border-pink-600" required />
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button className="btn btn-secondary w-full">Add</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddAFood;