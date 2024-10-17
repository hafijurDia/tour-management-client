import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarDays, FaUsers } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { NavLink, useLoaderData } from "react-router-dom";

// Helper function to shuffle the array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sort: Math.random() })) // Assign random values to each element
    .sort((a, b) => a.sort - b.sort) // Sort by random values
    .map((item) => ({ ...item, sort: undefined })); // Remove the random values
};


const AllTouristSpot = () => {

    const loadedTouristSpot = useLoaderData();
    const showRandomlly = shuffleArray(loadedTouristSpot);
    const [touristSpots, setTouristSposts] = useState(showRandomlly);
    console.log(touristSpots);


  return (
    <>
      <section className="w-full spot-details-banner py-20 -z-10 relative"
      style={{
        backgroundImage: `url('https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/home1-banner-img1.png')`,
        backgroundSize: 'cover',  // or 'contain' depending on your needs
        backgroundPosition: 'center center', // Options: 'top', 'bottom', 'left', 'right', or specific pixels
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
      >
        {/* Overlay */}
  <div className="absolute inset-0 z-10 bg-black opacity-80"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-center text-white ">
            All Tourist Spots {touristSpots.length}
          </h2>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="container mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
          {/* Display 6 random tourist spots */}
          {touristSpots.map((touristSpot) => (
            <div
              key={touristSpot._id}
              className="relative max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Overlay for Location and Travel Time */}
              <div className="absolute top-0 left-0 text-white p-3 z-10 rounded-br-lg">
                <p className="text-sm font-medium bg-black bg-opacity-80 mb-1 p-1 rounded flex items-center gap-1 capitalize">
                  <FaMapMarkerAlt className="text-red-600" /> {touristSpot.countryName}
                </p>
                <p className="text-sm bg-white bg-opacity-80 text-black p-1 rounded flex items-center gap-1 capitalize">
                  <FaCalendarDays className="text-green-600" /> {touristSpot.travelTime}
                </p>
              </div>

              {/* Image */}
              <img
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                src={touristSpot.imageUrl} // Use the actual image URL from the touristSpot data
                alt={touristSpot.touristsSpotName}
              />

              {/* Card Content */}
              <div className="p-4 mb-10">
                <h3 className="text-xl font-semibold mb-2 capitalize">
                  {touristSpot.touristsSpotName}
                </h3>
                <p className="text-gray-600 mb-1 flex items-center gap-2 text-sm">
                  <RiMoneyDollarCircleLine className="text-green-600 text-2xl" />{" "}
                  {touristSpot.averageCost}
                </p>
                <p className="text-gray-600 mb-1 flex items-center gap-2 text-sm">
                  <FaUsers className="text-green-600 text-2xl" />
                  {touristSpot.totalVisitorsPerYear}
                </p>
              </div>
              <NavLink to={`/spot-details/${touristSpot._id}`}>
                <button className="bg-green-600 text-white px-4 py-2 mt-4 w-full hover:bg-green-800 transition-colors duration-300 absolute left-0 bottom-0">
                  View Spots
                </button>
              </NavLink>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default AllTouristSpot;
