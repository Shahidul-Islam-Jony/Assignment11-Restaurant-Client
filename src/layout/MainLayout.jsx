import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";
import Footer from "../components/sharedComponents/Footer";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;