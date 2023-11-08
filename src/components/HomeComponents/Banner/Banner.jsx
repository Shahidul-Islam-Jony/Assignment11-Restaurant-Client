import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="z-10">
            <div className="relative">
                <img src="banner5.jpg" className="w-full z-10 h-[600px] object-cover md:h-[500px] rounded-lg" alt="" />
                <div className="absolute top-28 mx-auto text-center w-full">
                    <h2 className="text-3xl font-medium mb-3">Explore Our Culinary Delights</h2>
                    <p className="font-medium">Welcome to Food Fantasia, where culinary artistry meets warm hospitality.<br /> Our menu is a symphony of flavors, crafted with the finest ingredients and a passion <br /> for gastronomy.Whether you are a connoisseur of fine dining or simply seeking a <br /> delightful meal, our restaurant offers an unforgettable experience.Join us <br /> and indulge in a culinary journey that will tantalize your taste buds <br /> and leave you with unforgettable memories</p>

                    <Link to='/all-food-items' className="btn btn-secondary mt-4 capitalize font-medium px-5 text-lg">See Menus</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;