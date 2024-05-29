import React, { useContext, useState } from 'react';
import logo from '../../assets/house-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Identity/AuthProvider/AuthProvider';
import { AiOutlineLogout } from 'react-icons/ai';
import '../Navbar/Navber.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut, user } = useContext(AuthContext);
  const isAdmin = true;
  const handleSignOut = () => {
    signOut()
      .then(res => {})
      .catch(error => console.log(error));
  };

  return (
    <header className=" fixed z-20 bg-opacity-50 w-full shadow dark:bg-gray-800">
      <nav className="relative  dark:bg-gray-900">
        <div className="container px-6  mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <img className="w-24 mb-6 h-20 " src={logo} alt="" />
              <h1 className="text-2xl font-bold">
                Doc-<span className="text-green-600">House</span>
              </h1>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen
                ? 'translate-x-0 opacity-100 '
                : 'opacity-0 -translate-x-full'
            } absolute inset-x-0 z-20 w-full font-bold px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          >
            <div id="sidebar" className="flex flex-col md:flex-row md:mx-6">
              <NavLink
                to={'/'}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Home
              </NavLink>
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
              <NavLink
                to={'/Appoinment'}
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Appoinment
              </NavLink>
              {isAdmin ? (
                <NavLink
                  to={'/dashboard/Mydash'}
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to={'/dashboard/AppointmentsTable'}
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  Dashboard
                </NavLink>
              )}

              {user ? (
                <h1
                  className="flex items-center hover:rounded-lg hover:shadow-slate-400 hover:border hover:border-green-900 hover:shadow-2xl hover:text-orange-500 "
                  onClick={handleSignOut}
                >
                  <AiOutlineLogout />
                  LogOut
                </h1>
              ) : (
                <NavLink
                  to={'LogIn'}
                  className="my-2 text-gray-700 hover:rounded-lg hover:border hover:border-green-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  LogIn
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
