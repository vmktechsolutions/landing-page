import React from 'react';
import Hero from "../hero/index"
import Information from "../information/index";
import Languages from "../languages/index";
import Industry from "../industry/index";
import Client from "../client/index";
import Advertisment from "../advertisment/index";
import WebServices from "../../components/Webservices/ServicesSection"
// import Services2 from '../services/index';
import Development from '../development/index';
// import Faq from '../../components/AskQuestion/Faq';
import Testimonial from '../testimonial/index';
import SocialBar from '../../components/socialBar/SocialBar';
import ProcessFlow from '../../components/Process/Page';

const Home = () => {

    return (
        <div className="min-h-screen w-full bg-white">
            <SocialBar />
            <Hero />
            <WebServices />
            {/* <Services2 /> */}
            <ProcessFlow />
            <Development />
            <Information />
            <Languages />
            {/* <DevelopmentCycle/> */}
            {/* <Industry /> */}
            <Client />
            {/* <Advertisment /> */}
            {/* <AwardSection /> */}
            {/* <Testimonial /> */}
            {/* <Insights/> */}
            {/* <FreqQues/> */}
            {/* <Faq /> */}
            {/* <MediaCoverage/> */}
        </div>
    )
}

export default Home;
