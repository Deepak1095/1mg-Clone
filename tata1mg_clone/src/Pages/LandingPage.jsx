import React from "react";
import Ayurveda from "./Ayurveda";
import FeauredBrands from "./FeauredBrands";
import Footer from "./Footer/Footer";
import GenericCarousel from "./GenericCarousel";
import HeaderCarousel from "./HeaderCarousel";
import HealthConcernCarouselCard from "./HealthConcernCarouselCard";
import SHBC from "./SHBC";

export default function LandingPage() {
  return (
    <>
      <HeaderCarousel />
      <SHBC />
      <HealthConcernCarouselCard />
      <FeauredBrands />
      <GenericCarousel
        url={`${process.env.REACT_APP_URL}/vitamins`}
        heading={`Vitamins`}
        link="vitamins"
      />
      <GenericCarousel
        url={`${process.env.REACT_APP_URL}/supplements`}
        heading={`Supplements`}
        link="supplements"
      />{" "}
      <GenericCarousel
        url={`${process.env.REACT_APP_URL}/skin_care`}
        heading={`Skin care`}
        link="skin_care"
      />
      <GenericCarousel
        url={`${process.env.REACT_APP_URL}/ayurveda_medicine`}
        heading={`Ayurveda`}
        link="ayurveda_medicine"
      />{" "}
      <Ayurveda />
    </>
  );
}
