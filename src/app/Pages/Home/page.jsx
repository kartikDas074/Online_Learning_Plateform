import SponsorMarquee from "@/Component/Sponsor";
import Banner from "./HomeComponent/Banner";
import Choose from "./HomeComponent/Choose";
import LearningTips from "./HomeComponent/LearningTips";
import Popular from "./HomeComponent/Popular";

const Homepage = () => {
    return (
        <div>
           <Banner></Banner>
           <Popular></Popular>
           <Choose></Choose>
           <LearningTips></LearningTips>
           <SponsorMarquee></SponsorMarquee>
        </div>
    );
};

export default Homepage;