import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Countries from "./Countries";
import SwipperSlider from "./SwipperSlider";
import TouristSpot from "./TouristSpot";
import { useState } from "react";

const HomeFull = () => {
  const loadedTouristSpot = useLoaderData();
  const [touristSpots, setTouristSposts] = useState(loadedTouristSpot);
  console.log(touristSpots);

  return (
    <>
      <SwipperSlider />
      <About />
      <Countries />
      {/* Pass touristSpots as a prop to TouristSpot */}
      <TouristSpot touristSpots={touristSpots} />
    </>
  );
};

HomeFull.propTypes = {};

export default HomeFull;
