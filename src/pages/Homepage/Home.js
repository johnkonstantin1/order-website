import React from "react";
import HeroSection from "../../components/HeroSection";
import Pricing from "../Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data.js";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
