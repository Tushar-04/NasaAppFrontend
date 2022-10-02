import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards from "../components/Begineer";
import HeroImage from "../components/HeroImage";

const begineer = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="BEGINEER." text="Begineeer Resources" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default begineer;
