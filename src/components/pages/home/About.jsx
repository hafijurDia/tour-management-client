import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbTargetArrow } from "react-icons/tb";
import { FaUsersViewfinder } from "react-icons/fa6";
import "./About.css";
import { FaUmbrellaBeach } from "react-icons/fa";
import tourAnimation from '../../../../aboutLottify.json';
import { useLottie } from "lottie-react";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip'

const About = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const options = {
    animationData: tourAnimation,
    loop: true,
  };

  // Correctly accessing the view property of the useLottie hook
  const { View } = useLottie(options);

  return (
    <section className="pt-16 dark:py-16 dark:bg-gray-900">
      <div className="container md:grid lg:grid grid-cols-2 gap-5 items-center">
        <div>
          <Fade direction="up">
          <span className="small-title text-xl text-green-600 flex items-center gap-2">
            <FaUmbrellaBeach /> About Us <FaUmbrellaBeach />
          </span>
          </Fade>
          <Fade direction="up"><h1 className="text-5xl font-bold my-5 leading-tight dark:text-white">
            Let’s know About Our Journey For <span className="my-anchor-element">TripRex</span>.
          </h1></Fade>
          <Tooltip anchorSelect=".my-anchor-element" place="top" className="bg-green-800">
          Your trusted partner for unforgettable travel experiences.
</Tooltip>
          <Fade direction="up">
          <div className="">
            <div className="max-w-xl mx-auto">
              {/* Tab Buttons */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button
                  className={`tab-button flex justify-center items-center py-2 px-4 text-gray-600 dark:text-gray-300 font-semibold ${
                    activeTab === "tab1" ? "active-tab" : ""
                  }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  <TbTargetArrow className="mr-2"></TbTargetArrow> Mission & Vision
                </button>
                <button
                  className={`tab-button flex justify-center items-center py-2 px-4 text-gray-600 dark:text-gray-300 font-semibold ${
                    activeTab === "tab2" ? "active-tab" : ""
                  }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  <FaUsersViewfinder className="mr-2"></FaUsersViewfinder> Focus On Customer
                </button>
              </div>

              {/* Tab Content */}
              <div
                className={`tab-content py-6 pl-0 lg:pr-10 ${
                  activeTab === "tab1" ? "block" : "hidden"
                } dark:bg-gray-900 text-gray-900 dark:text-gray-300`}
              >
                <p className="leading-loose">
                  Our mission is to inspire and guide travelers by delivering
                  unforgettable experiences, ensuring each journey is personalized,
                  stress-free, and full of adventure tailored to individual preferences.
                </p>
              </div>
              <div
                className={`tab-content py-6 px-0 ${
                  activeTab === "tab2" ? "block" : "hidden"
                } dark:bg-gray-900 text-gray-900 dark:text-gray-300`}
              >
                <p className="leading-loose">
                  We curate unique travel plans based on your interests, offering immersive
                  experiences that cater to your specific desires, ensuring every trip is
                  as unforgettable as possible.
                </p>
              </div>
            </div>
            <NavLink to="http://localhost:5173/country/bangladesh">
              <button className="animated-button text-normal text-white bg-green-600 rounded-md py-2 px-5 hover:bg-black hover:scale-105 transition-all duration-500 ease-in-out">
                More About
              </button>
            </NavLink>
          </div>
          </Fade>
        </div>

        <Fade>
        <div className="relative w-full">
          {/* Rendering the Lottie animation */}
          <div className="w-full">{View}</div>
        
          <img
            className="absolute left-10 bottom-14 -z-0"
            src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1//vector/about-img-bg-vector.svg"
            alt=""
          />
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
