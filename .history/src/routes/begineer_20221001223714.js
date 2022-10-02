import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards from "../components/begineer";
import HeroImage from "../components/HeroImage";

const begineer = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Begineer Resources" text="" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default begineer;
