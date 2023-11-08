import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DynamicTitle from "../../components/sharedComponents/DynamicTitle";

const UpdateFood = () => {
    const food = useLoaderData();
    console.log(food);

    const { _id, category, description, food_origin, image, made_by, name, price, quantity } = food;

    const updatefood = e => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const description = form.description.value;
        const food_origin = form.food_origin.value;
        const image = form.image.value;
        const made_by = form.made_by.value;
        const name = form.name.value;
        const priceString = form.price.value;
        const quantityString = form.quantity.value;

        const price = parseInt(priceString);
        const quantity = parseInt(quantityString);

        const newFood = { category, count: 0, description, food_origin, image, made_by, name, price, quantity }
        console.log(newFood);

        axios.patch(`http://localhost:5000/api/v1/updateFood/${_id}`, newFood)
            .then(result => {
                console.log(result);
                toast.success('Food Update Successful !', {
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
        <HelmetProvider>
            <DynamicTitle title='Food-Fantasia | Update-Food'></DynamicTitle>
            <div className="my-10">
                <form onSubmit={updatefood}>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Food name" defaultValue={name} className="input rounded-md w-full border-pink-600" required />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="category" defaultValue={category} className="input rounded-md w-full border-pink-600" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="food image url" defaultValue={image} className="input rounded-md w-full border-pink-600" required />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">food_origin</span>
                            </label>
                            <input type="text" name='food_origin' placeholder="food_origin" defaultValue={food_origin} className="input rounded-md w-full border-pink-600" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" defaultValue={price} className="input rounded-md w-full border-pink-600" required />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="quantity" defaultValue={quantity} className="input rounded-md w-full border-pink-600" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">Made By</span>
                            </label>
                            <input type="text" name='made_by' placeholder="made_by" defaultValue={made_by} className="input rounded-md w-full border-pink-600" readOnly />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="label">
                                <span className="text-xl font-medium">description</span>
                            </label>
                            <input type="text" name='description' placeholder="description" defaultValue={description} className="input rounded-md w-full border-pink-600" required />
                        </div>
                    </div>

                    <div className='text-center mt-4'>
                        <button className="btn btn-secondary w-full">Update</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </HelmetProvider>
    );
};

export default UpdateFood;