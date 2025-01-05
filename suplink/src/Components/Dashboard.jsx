import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const location = useLocation(); // Access location
  const { firstName, lastName } = location.state || {}; // Destructure the state
  const sidebarRef = useRef(null); // Reference for the sidebar

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    Aos.init();

    // Close sidebar on outside click
    const handleOutsideClick = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="text-white bg_grad overflow-x-hidden h-screen">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          ref={sidebarRef} // Attach ref to sidebar
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 bg-black text-white transition-transform duration-300 lg:relative lg:translate-x-0`}
        >
          <nav className="mt-6">
            <Link
              to={"/dashboard"}
              className="block py-2.5 px-4 rounded hover:bg-indigo-700 transition duration-200"
            >
              Dashboard
            </Link>
            <Link
              to={"/dashboard"}
              className="block py-2.5 px-4 rounded hover:bg-indigo-700 transition duration-200"
            >
              Profile
            </Link>
         
            <Link
              to={"/"}
              className="block py-2.5 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Logout
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <div className="flex items-center justify-between px-6 py-4 shadow">
            <button
              className="text-gray-700 lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <h1 className="text-xl font-semibold">
              {firstName && lastName ? (
                <h1 className="text-4xl font-bold">
                  Welcome, {firstName} {lastName}!
                </h1>
              ) : (
                <h1 className="text-4xl font-bold">Welcome Back!</h1>
              )}
            </h1>
            <div className="flex items-center space-x-4">
              
              <span className="font-semibold">{firstName  ? (
                <h1 className="text-4xl font-bold">
                  {firstName}!
                </h1>
              ) : (
                <h1 className="text-4xl font-bold">Admin</h1>
              )}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Cards */}
              <div className="p-4 bg-white rounded shadow">
                <h2 className="text-lg font-semibold">Card Title</h2>
                <p className="text-gray-600">
                  This is some content inside a card.
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h2 className="text-lg font-semibold">Card Title</h2>
                <p className="text-gray-600">
                  This is some content inside a card.
                </p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h2 className="text-lg font-semibold">Card Title</h2>
                <p className="text-gray-600">
                  This is some content inside a card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
