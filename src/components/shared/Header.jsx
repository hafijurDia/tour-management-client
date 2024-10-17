import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import DarkModeToggle from '../ThemeToggle';
import { Fade } from "react-awesome-reveal";



const Header = () => {
  const { currentUser, userLogout } = useContext(AuthContext);
  console.log(currentUser);

  // State to control dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // State to control mobile menu visibility
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle user dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
<Fade>
<nav className="relative z-[9999] border-gray-200 dark:bg-gray-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/logo.svg" className="h-8" alt="Flowbite Logo" />
         
        </a>
       
        <div className="flex gap-5 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          {/* Check if the user is logged in */}
          {currentUser ? (
            <>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded={dropdownVisible}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={currentUser.photoURL || '/default-profile.png'} alt="user photo" />
              </button>

              {/* Dropdown menu */}
              {dropdownVisible && (
                <div
                  className="absolute right-5 top-10 z-[9999] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">{currentUser.displayName}</span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{currentUser.email}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <NavLink to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Settings
                      </NavLink>
                    </li>
                    <li>
            
                      <button onClick={userLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out</button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
             
             <NavLink to="/login"><button className="py-0 px-5 block py-2 px-3 uppercase dark:text-white hover:text-green-600 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 font-medium">Login</button></NavLink>
            </>
           
          )}
{/* theme toogle will add here */}
<DarkModeToggle />
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={mobileMenuVisible}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`items-center justify-between ${mobileMenuVisible ? 'block absolute z-10 top-10 left-3' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-950 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className="block py-2 px-3 uppercase dark:text-yellow-300 hover:text-green-600 rounded md:bg-transparent  md:p-0 md:dark:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-tourist-spot" className="block py-2 px-3 uppercase light:text-green-600 hover:text-green-600 rounded md:bg-transparent md:p-0 md:dark:text-white">All Tourists Spot</NavLink>
            </li>
            <li>
              <NavLink to="/add-tourist-spot" className="block py-2 px-3 uppercase dark:text-white hover:text-green-600 rounded md:bg-transparent md:p-0 md:dark:text-white">Add Tourists Spot</NavLink>
            </li>
            <li>
              <NavLink to="/my-list" className="block py-2 px-3 uppercase dark:text-white hover:text-green-600 rounded md:bg-transparent md:p-0 md:dark:text-white">My List</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
    </Fade>
  );
};

Header.propTypes = {};

export default Header;
