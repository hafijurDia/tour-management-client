import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyList = () => {
  const { currentUser, setLoading } = useContext(AuthContext);
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoadingState] = useState(true); // Local loading state
  const userEmail = currentUser?.email;

  useEffect(() => {
    const fetchTouristSpots = async () => {
    
      setLoadingState(true); // Local loading state
      try {
        const response = await fetch(
          `https://lvc63.com/my-list?email=${userEmail}`
        );
        const data = await response.json();
        setTouristSpots(data);
      } catch (error) {
        console.error("Error fetching user's tourist spots:", error);
      } finally {
        
        setLoadingState(false); // Local loading state
      }
    };

    if (userEmail) {
      fetchTouristSpots();
    }
  }, [userEmail, setLoading]);

  const handleSpotDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lvc63.com/tourist-spot/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The tourist spot has been deleted.",
                "success"
              );
              // Refresh the list by removing the deleted spot from the state
              setTouristSpots(touristSpots.filter((spot) => spot._id !== _id));
            } else {
              Swal.fire("Error!", "There was a problem deleting the tourist spot.", "error");
            }
          })
          .catch((error) => {
            console.error("Error during deletion:", error);
            Swal.fire("Error!", "An error occurred during deletion.", "error");
          });
      }
    });
  };

  return (
    <>
      <section className="w-full add-spot-banner bg-slate-800">
        <div className="container">
          <h2 className="text-2xl font-bold text-center text-white mb-6 py-20">
            <span> My Total List </span> {touristSpots.length}
          </h2>
        </div>
      </section>

      <section className="w-full add-spot-banner py-20">
        <div className="container">
          {loading ? (
            <div className="text-center py-10">
              <p>Loading...</p>
              {/* Optional: Use a spinner here */}
            </div>
          ) : (
            <div className="w-full">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Country</th>
                    <th>Average Cost</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {touristSpots.map((spot, index) => (
                    <tr key={spot._id}>
                      <td>{index + 1}</td>
                      <td>{spot.touristsSpotName}</td>
                      <td>{spot.location}</td>
                      <td>{spot.countryName}</td>
                      <td>{spot.averageCost}</td>
                      <td className="flex justify-center items-center">
                        <NavLink to={`/update-spot/${spot._id}`}>
                          <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                            <FaRegPenToSquare />
                          </button>
                        </NavLink>
                        <button
                          onClick={() => handleSpotDelete(spot._id)}
                          className="bg-red-500 text-white px-4 py-1 rounded"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyList;
