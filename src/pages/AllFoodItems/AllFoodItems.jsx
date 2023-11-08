import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DynamicTitle from "../../components/sharedComponents/DynamicTitle";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { RotatingLines } from 'react-loader-spinner';


const AllFoodItems = () => {
    const { count } = useLoaderData();
    // console.log(count);
    const foodsPerPage = 9;
    const numOfPages = Math.ceil(count / foodsPerPage);
    const pages = [...Array(numOfPages).keys()]
    // console.log(pages);
    const [currentPage, setCurrentPage] = useState(0);
    // console.log(currentPage);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get(`https://assignment-11-server-mauve.vercel.app/api/v1/allFoods?page=${currentPage}&size=${foodsPerPage}`)
            .then(result => {
                console.log(result.data)
                setFoods(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [currentPage])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchName = e.target.search.value;
        // console.log(searchName);
        const searchedFood = foods.filter(food => food.name.toLowerCase() === searchName.toLowerCase())
        // console.log(searchedFood);
        setFoods(searchedFood);
    }


    return (
        <HelmetProvider>
            <div className="mt-16 z-10">
                {/* for dynamic title */}
                <DynamicTitle title='Food-Fantasia | All Food Items'></DynamicTitle>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-3xl font-medium text-center">Search specific food by name : </p>
                    <div className="form-control">
                        <form onSubmit={handleSearch} className="input-group">
                            <input type="text" name="search" placeholder="Search…" className="input border-pink-600 md:w-96" />
                            <button className="btn md:w-20 bg-pink-600 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </form>
                    </div>

                </div>
                <div className="mt-20 mb-10">
                    <h2 className="text-5xl text-center mb-10 font-bold"><span className="border-x-8 border-pink-600 textShadow px-4">All Foods</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {

                            foods ? foods.map(food => <motion.div whileHover={{ scale: 1.1 }} key={food._id} className="">
                                <div className="card bg-violet-200 border-4 border-pink-400 shadow-xl">
                                    <figure><img src={food.image} className="w-full m-2 h-56 rounded-lg" alt={food.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Name : {food.name}</h2>
                                        <p className="font-medium">Category : {food.category}</p>
                                        <p className="font-medium">Price : $ {food.price}</p>
                                        <p className="font-medium">Quantity : {food.quantity}</p>
                                        <div className="card-actions justify-center">
                                            <Link to={`/single-food-item/${food._id}`} className="btn btn-secondary font-medium text-lg w-full">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>) :
                                // loading spinner
                                <div className="flex justify-center items-center">
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
                </div>
                <div className="text-center mb-16 pagination">
                    <button onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}>&lt;&lt;  Prev</button>
                    {
                        pages?.map(pageNum => <button
                            onClick={() => setCurrentPage(pageNum)}
                            className={currentPage === pageNum ? 'selected' : ''}
                            key={pageNum}>{pageNum + 1}</button>)
                    }
                    <button onClick={() => currentPage < numOfPages - 1 && setCurrentPage(currentPage + 1)}>Next  &gt;&gt;</button>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllFoodItems;