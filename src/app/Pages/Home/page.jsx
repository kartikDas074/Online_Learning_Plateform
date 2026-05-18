import SponsorMarquee from "@/Component/Sponsor";
import Banner from "./HomeComponent/Banner";
import Choose from "./HomeComponent/Choose";
import LearningTips from "./HomeComponent/LearningTips";
import Popular from "./HomeComponent/Popular";
import { Surface } from "./HomeComponent/Faq";
import Instructor from "./HomeComponent/Instructor";

const Homepage = () => {
    return (
        <div>
           <Banner></Banner>
           <Popular></Popular>
           <Choose></Choose>
           <LearningTips></LearningTips>
           <Instructor></Instructor>
           <SponsorMarquee></SponsorMarquee>
           <Surface></Surface>
        </div>
    );
};

export default Homepage;