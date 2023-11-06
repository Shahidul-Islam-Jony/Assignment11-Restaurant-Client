import { Link, useLoaderData } from "react-router-dom";

const SingleFoodItem = () => {
    const food = useLoaderData();
    // console.log(Object.keys(food).join());
    const {_id,name,image,category,price,made_by,food_origin,description} = food;
    return (
        <div>
            <div className="bg-base-200 my-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-2/3 border-red-300">
                        <img src={image} className="rounded-lg w-full h-[500px]" />
                    </div>
                    <div className="w-1/2 space-y-2 mt-5">
                        <h1 className="text-3xl font-bold">Name: {name}</h1>
                        <p className="text-xl font-medium">Category: {category}</p>
                        <p className="text-xl font-medium">Made By: {made_by}</p>
                        <p className="text-xl font-medium">Food Origin: {food_origin}</p>
                        <p className="pt-5">{description}</p>
                        <div className="flex items-center gap-7 pt-10">
                            <p className="text-3xl font-medium">$ {price}</p>
                            <Link to={`/foodPurchase/${_id}`} className="btn btn-secondary w-72">Order</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodItem;