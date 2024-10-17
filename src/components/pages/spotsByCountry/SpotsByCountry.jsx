import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";

const SpotsByCountry = () => {
  const { country } = useParams();
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    const fetchSpotByCountry = async () => {
      try {
        const response = await fetch(
          `https://lvc63.com/tourist-spot?country=${country}`
        );
        const data = await response.json();
        setTouristSpots(data);
      } catch (error) {
        console.error("Error fetching user's tourist spots:", error);
      }
    };

    if (country) {
      fetchSpotByCountry();
    }
  }, [country]); // Make sure setLoading is in the dependency array

  return (
    <div>
      <section className="w-full add-spot-banner ">
        <div className="container">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 py-20">
            Show countywise spost {country} {touristSpots.length}
          </h2>
        </div>
      </section>
      <section className="w-full">
        <div className="container mx-auto px-4">
          <div className="">
            {
                touristSpots.map(spot=>
                <div key={spot._id} className="w-full md:flex mb-10 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:w-1/3 lg:w-1/3">
                      <img
                        className="full-w lg:h-full object-cover"
                        src={spot.imageUrl}
                        alt="Tourist Spot"
                      />
                    </div>
      
                    <div className="w-2/3 p-4 ">
                      <h3 className="text-xl font-semibold mb-2">{spot.touristsSpotName}</h3>
                      <p className="text-gray-600 mb-1">{spot.countryName} </p>
                      <p className="text-gray-600 mb-1">{spot.description}</p>
                      <p className="text-gray-600 mb-1">Location: {spot.location} </p>
                      <p className="text-gray-600 mb-1">Average Cost: {spot.averageCost} </p>
                      <p className="text-gray-600 mb-1">Time to Travel: {spot.seasonality} </p>
                      <NavLink to={`/spot-details/${spot._id}`}><button className="btn">View Details</button></NavLink>
                    </div>
                  </div>)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

SpotsByCountry.propTypes = {};

export default SpotsByCountry;
