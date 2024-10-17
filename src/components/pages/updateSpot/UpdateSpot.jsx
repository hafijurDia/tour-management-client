import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateSpot = () => {

    const loaddedSpot = useLoaderData();
    console.log(loaddedSpot);
const handleSpotUpdate = (e) => {
  e.preventDefault();
  const form = e.target;
  const imageUrl = form.imageUrl.value;
  const touristsSpotName = form.touristsSpotName.value;
  const countryName = form.countryName.value;
  const location = form.location.value;
  const description = form.description.value;
  const averageCost = form.averageCost.value;
  const seasonality = form.seasonality.value;
  const travelTime = form.travelTime.value;
  const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
  const userEmail = form.userEmail.value;
  const userName = form.userName.value;
  const updatedSpot = {imageUrl,touristsSpotName,countryName,location,description,averageCost,seasonality,travelTime,totalVisitorsPerYear,userEmail,userName }
  console.log(updatedSpot);

  fetch(`https://lvc63.com/tourist-spot-update/${loaddedSpot._id}`,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updatedSpot),
  })
  .then(res=>res.json())
  .then(data => {
    console.log(data);
         // Check if data is received correctly
         if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Tourist spot updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to update tourist spot',
            icon: 'error',
            confirmButtonText: 'Try Again',
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
  })
}

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


  </div>
</section>

      <section className="w-full my-20">
        <div className="container">
        
          <form className="space-y-6" onSubmit={handleSpotUpdate}>
            
            <div className="flex flex-wrap -mx-4">
              {/* Left Column */}
              <div className="w-full md:w-1/2 px-4">
                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Previous Image
                  </label>
                    <img className='w-40 mb-5 rounded' src={loaddedSpot.imageUrl} alt="" />
                  </div>
                <div>
                 
                  <label className="block text-sm font-medium text-gray-700">
                    New Image URL
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.imageUrl}
                    required
                  />
                </div>

                {/* Tourist Spot Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tourist Spot Name
                  </label>
                  <input
                    type="text"
                    name="touristsSpotName"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.touristsSpotName}
                    required
                  />
                </div>

                {/* Country Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country Name
                  </label>
                  <select
                    name="countryName"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.countryName}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="thailand"> Thailand</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="cambodia">Cambodia</option>
                  </select>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Short Description
                  </label>
                  <textarea
                    name="description"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.description}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.location}
                    required
                  />
                </div>

              
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 px-4">
       
  {/* Average Cost */}
  <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Average Cost
                  </label>
                  <input
                    type="text"
                    name="averageCost"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.averageCost}
                    required
                  />
                </div>
                {/* Seasonality */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Seasonality
                  </label>
                  <select
                    name="seasonality"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.seasonality}
                    required
                  >
                    <option value="">Select Season</option>
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="autumn">Autumn</option>
                  </select>
                </div>

                {/* Travel Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Travel Time (in days)
                  </label>
                  <input
                    type="text"
                    name="travelTime"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.travelTime}
                    required
                  />
                </div>

                {/* Total Visitors Per Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Total Visitors Per Year
                  </label>
                  <input
                    type="text"
                    name="totalVisitorsPerYear"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.totalVisitorsPerYear}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Email
                  </label>
                  <input
                    type="eamil"
                    name="userName"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.userName}
                    readOnly
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Email
                  </label>
                  <input
                    type="text"
                    name="userEmail"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={loaddedSpot.userEmail}
                    readOnly
                    required
                  />
                </div>

            

                {/* Add Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center mt-10 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update Now
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
        </>
    );
};


UpdateSpot.propTypes = {

};


export default UpdateSpot;
