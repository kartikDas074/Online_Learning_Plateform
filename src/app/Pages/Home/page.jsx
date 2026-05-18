import Banner from "./HomeComponent/Banner";
import Choose from "./HomeComponent/Choose";
import Popular from "./HomeComponent/Popular";

const Homepage = () => {
    return (
        <div>
           <Banner></Banner>
           <Popular></Popular>
           <Choose></Choose>
        </div>
    );
};

export default Homepage;