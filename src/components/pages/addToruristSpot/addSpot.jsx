import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";

const AddSpot = () => {
  const { currentUser } = useContext(AuthContext);

  const handleAddTouristSport = (e) => {
    e.preventDefault();

    // Accessing form elements using event's target property
    const form = e.target;

    // Extracting values from each input field
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

    const touristSpot = {
      imageUrl,
      touristsSpotName,
      countryName,
      location,
      description,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userEmail,
      userName,
    };

    fetch("https://lvc63.com/add-tourist-spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          // ...
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New tourist spot has been added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <section className="w-full add-spot-banner bg-slate-800">
        <div className="container">
          <h2 className="text-2xl font-bold text-center text-white mb-6 py-20">
            Add a Tourist Spot
          </h2>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="container">
          <form className="space-y-6" onSubmit={handleAddTouristSport}>
            <div className="flex flex-wrap -mx-4">
              {/* Left Column */}
              <div className="w-full md:w-1/2 px-4">
                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="https://example.com/image.jpg"
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
                    placeholder="Enter the tourist spot name"
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
                    placeholder="Brief description of the tourist spot"
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
                    placeholder="Enter the location"
                    required
                  />
                </div>

                {/* Average Cost */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Average Cost
                  </label>
                  <input
                    type="text"
                    name="averageCost"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Cost in USD"
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 px-4">
                {/* Location */}

                {/* Seasonality */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Seasonality
                  </label>
                  <select
                    name="seasonality"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    placeholder="Number of days"
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
                    placeholder="Number of visitors"
                    required
                  />
                </div>

                {/* User Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Email
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={currentUser?.email}
                    readOnly
                    required
                  />
                </div>

                {/* User Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={currentUser?.displayName}
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
                    Add
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

export default AddSpot;
