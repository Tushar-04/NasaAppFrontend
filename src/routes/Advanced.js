import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards from "../components/Advanced";
import HeroImage from "../components/HeroImage";

const advanced = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Advanced." text="Advanced Resources" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default advanced;
