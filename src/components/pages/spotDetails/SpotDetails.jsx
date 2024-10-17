import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useLoaderData } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const SpotDetails = () => {
  const loaddedSpot = useLoaderData();
  console.log(loaddedSpot);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component loads
  }, []);

  return (
    <>
      <section
  className="w-full spot-details-banner py-16 relative"
  style={{
    backgroundImage: `url(${loaddedSpot.imageUrl})`,
    backgroundSize: 'cover',  // or 'contain' depending on your needs
    backgroundPosition: 'center center', // Options: 'top', 'bottom', 'left', 'right', or specific pixels
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-80"></div>
  
  <div className="container relative z-10">
    <h2 className="text-4xl font-bold text-center text-white  capitalize">
      {loaddedSpot.touristsSpotName}
    </h2>
    <h4 className="text-xl font-bold text-center mt-4 mb-6 text-gray-400 capitalize">
      {loaddedSpot.countryName}
    </h4>

  </div>
</section>


      <section className="w-full py-10">
        <div className="container flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <img src={loaddedSpot.imageUrl} alt="" />
            <h3 className="text-xl font-semibold text-gray-800 mt-5">
              About {loaddedSpot.touristsSpotName}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {loaddedSpot.description}
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Location
            </h4>
            <p className="text-gray-600 mb-6">{loaddedSpot.location}</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Country
            </h4>
            <p className="text-gray-600 mb-6">{loaddedSpot.countryName}</p>

            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Best Time to Visit
            </h4>
            <p className="text-gray-600 mb-6">{loaddedSpot.seasonality}</p>

            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Travel Time
            </h4>
            <p className="text-gray-600 mb-6">{loaddedSpot.travelTime} Days</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Total Visitors Per Year
            </h4>
            <p className="text-gray-600 mb-6">
              {loaddedSpot.totalVisitorsPerYear}
            </p>
          </div>
          <aside className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              More Information
            </h4>
            <p className="text-gray-600 mb-6">
              <strong>Contact:</strong> {loaddedSpot.contact}
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Entry Fee:</strong>{" "}
              {loaddedSpot.entryFee ? loaddedSpot.entryFee : "Free"}
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Opening Hours:</strong> {loaddedSpot.openingHours}
            </p>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Nearby Attractions
            </h4>
          </aside>
        </div>
     <div className="container">
        <NavLink to="/all-tourist-spot"><button className="btn bg-black text-white"><IoIosArrowRoundBack /> Back to all Tourist Spots</button></NavLink>
     </div>
      </section>

    </>
  );
};

SpotDetails.propTypes = {};

export default SpotDetails;
