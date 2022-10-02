import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards from "../components/Intermediate";
import HeroImage from "../components/HeroImage";

const intermediate = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="INTERMEDIATE." text="Intermediate Resources" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default intermediate;
