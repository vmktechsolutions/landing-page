import React from "react";
import Hero from "./Hero";
import Project from "./Project";
import ProjectCategories from "./ProjectCategories";
import OurClient from "./OurClient";
import ContactSection from "./ContactSection";
// import Faq from "../AskQuestion/Faq";
import Client from "../../pages/client";
import ContactUs from "../../pages/contactUs";
const Portfolio = () => {
  return (
    <>
      <Hero />
      <Project />
      <ProjectCategories />
      {/* <OurClient /> */}
      <Client/>

      {/* <ContactSection /> */}
    < ContactUs/>
      {/* <Faq/> */}
    </>
  );
};

export default Portfolio;
