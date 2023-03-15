import React from "react";
import HeroSection from "../../components/HeroSection";
import { servicesObjOne, servicesObjTwo, servicesObjThree, servicesObjFour } from "./Data.js";

function Services() {
  return (
    <>
      <HeroSection {...servicesObjOne} />
    </>
  );
}

export default Services;

