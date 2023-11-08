import { NavLink, Outlet } from "react-router-dom";
import Banner from "../../components/HomeComponents/Banner/Banner";
import DineWithUs from "../../components/HomeComponents/DineWithUs/DineWithUs";
import TopFood from "../../components/HomeComponents/TopFood/TopFood";
import { HelmetProvider } from "react-helmet-async";
import DynamicTitle from "../../components/sharedComponents/DynamicTitle";


const Home = () => {
    return (
        <HelmetProvider>
            <DynamicTitle title='Food-Fantasia'></DynamicTitle>
            <Banner></Banner>
            <TopFood></TopFood>
            <DineWithUs></DineWithUs>

            <div className="mb-10">
                <h2 className="text-center text-4xl italic font-bold font-serif text-green-800 mb-7">Choose You Favourite</h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                    <div className="flex flex-col col-span-3 border-2 border-green-600 rounded-l-lg pt-4 lg:px-2 space-y-2">
                        <NavLink to='/' className="bg-slate-300 text-xl font-medium rounded-md pl-4">Breakfast</NavLink>
                        <NavLink to='/lunch'  className="bg-slate-300 text-xl font-medium rounded-md pl-4">Lunch</NavLink>
                        <NavLink to='/dinner'  className="bg-slate-300 text-xl font-medium rounded-md pl-4">Dinner</NavLink>
                    </div>
                    <div className="col-span-9 border-2 border-green-600 rounded-r-lg">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;