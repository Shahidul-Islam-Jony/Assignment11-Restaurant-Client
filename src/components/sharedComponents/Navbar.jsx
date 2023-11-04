import { NavLink } from "react-router-dom";
import '../../../src/index.css'

const Navbar = () => {

    const links = <div className="flex flex-col gap-3 lg:flex-row md:gap-6 text-lg font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="all-food-items">ALL Food Items</NavLink>
        <NavLink to="blog">Blog</NavLink>
    </div>

    return (
        <div>
            <div className="py-4 flex justify-between items-center bg-base-100">
                <div className="flex items-center">
                    <div className="drawer w-10 lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                {links}

                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <img src="logo2.jpg" className="w-10 h-10 md:w-16 md:h-16 border-4 md:border-8 border-pink-600 rounded-full" alt="" />
                        <p className="text-xl md:text-3xl font-bold text-pink-600">Food Fantasia</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="">
                    <a className="btn btn-outline capitalize w-24 text-xl font-semibold text-pink-600">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;