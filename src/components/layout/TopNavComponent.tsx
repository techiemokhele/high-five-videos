import { useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";

import bgImage from "../../assets/images/Pattern.png";
import { navigationData } from "../../data/navData";
import LogoComponent from "../common/LogoComponent";
import ButtonComponent from "../common/ButtonComponent";

const TopNavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".sidebar") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-md sticky top-0 z-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      {/* Desktop Menu */}
      <div className="relative container z-10 mx-auto px-4 py-3 flex justify-between items-center">
        <LogoComponent />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navigationData.map((page) => (
            <a
              key={page}
              href="#page"
              className="text-white hover:text-yellow-400 text-xs tracking-wide"
            >
              {page}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <BsCart2 color="#B4CAD5" size={20} />
          <ButtonComponent
            fill={false}
            text="Sign Up"
            onClick={handleLinkClick}
          />
          <ButtonComponent fill={true} text="Login" onClick={handleLinkClick} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-black text-white shadow-lg transform sidebar ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
        style={{ zIndex: 50 }}
      >
        <div className="flex flex-col justify-between h-full p-4">
          <div className="flex justify-center pb-10">
            <LogoComponent />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4 justify-center">
            {navigationData.map((page) => (
              <a
                key={page}
                href="#page"
                className="text-white hover:text-yellow-400 text-xs"
                onClick={handleLinkClick}
              >
                {page}
              </a>
            ))}
          </div>

          {/* Sign Up and Login Buttons at the Bottom */}
          <div className="flex flex-col space-y-4 mt-6">
            <div
              onClick={handleLinkClick}
              className="text-white text-sm gap-2 flex flex-row items-center cursor-pointer"
            >
              <BsCart2 color="#B4CAD5" size={20} />
              <p>Cart</p>
            </div>
            <ButtonComponent
              fill={false}
              text="Sign Up"
              onClick={handleLinkClick}
            />
            <ButtonComponent
              fill={true}
              text="Login"
              onClick={handleLinkClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavComponent;
