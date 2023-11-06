import useFindFood from "../../hooks/useFindFood";
import "../../../src/index.css"
import { Link } from "react-router-dom";

const TopFood = () => {

    const { topFoods, setTopFoods } = useFindFood();
    console.log(topFoods);

    return (
        <div className="mt-16">
            <h2 className="text-5xl text-center mb-10 font-bold"><span className="border-x-8 border-pink-600 textShadow px-4">Top Foods</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    topFoods?.map(food => <div key={food._id} className="">
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
                    </div>)
                }
            </div>
            <div className="my-7 text-center">
                <Link to='/all-food-items' className="btn btn-secondary w-72">See All</Link>
            </div>
        </div>
    );
};

export default TopFood;