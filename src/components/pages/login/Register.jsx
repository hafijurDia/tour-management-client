import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // Password validation logic
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Validate password strength
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number."
      );
      return;
    }
    // Confirm password logic
    else if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    } else {
      createUser(email, password, name, photo)
        .then((result) => {
          // Signed up
          const createdAt = result.user?.metadata?.creationTime;
          const lastSignInTime = result.user?.metadata?.lastSignInTime;
          const user = {
            email,
            password,
            name,
            photo,
            createdAt: createdAt,
            lastSignInTime: lastSignInTime,
          };
          console.log(user);

          fetch("https://lvc63.com/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
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
                  title: "User has been created Successfully!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              navigate("/");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form className="space-y-6" onSubmit={handleRegister}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirmPassword"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Re-enter your password"
              required
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              {" "}
              Login here
            </NavLink>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-t w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase">
            Or register with
          </span>
          <span className="border-t w-1/5 lg:w-1/4"></span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
          >
            <FcGoogle className="mr-2 text-lg" />
            Google
          </button>
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
          >
            <IoLogoFacebook className="text-blue-500 mr-2 text-lg" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
