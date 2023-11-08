import Banner from "../../components/HomeComponents/Banner/Banner";
import LocationAndContact from "../../components/HomeComponents/LocationAndContact/LocationAndContact";
import TopFood from "../../components/HomeComponents/TopFood/TopFood";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopFood></TopFood>
           <LocationAndContact></LocationAndContact>
        </div>
    );
};

export default Home;