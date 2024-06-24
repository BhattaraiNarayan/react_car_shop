import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  // for mobile menu and toggling in mobile view with small screen
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // for active link and hover effect
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "text-black underline-4" : "text-white hover:text-gray-200";

  return (
    <nav className="sticky top-0 z-50 bg-red-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <NavLink to={"/react_car_shop/home"}>
            {" "}
            <img
              src={logo}
              alt="Car logo"
              width={150}
              height={24}
              className="object-contain"
            />
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-16 font-semibold text-xl">
          <NavLink to={"/react_car_shop/home"} className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to={"/react_car_shop/products"} className={getNavLinkClass}>
            Products
          </NavLink>
          <NavLink to={"/react_car_shop/services"} className={getNavLinkClass}>
            Services
          </NavLink>
          <NavLink to={"/react_car_shop/contact"} className={getNavLinkClass}>
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="mr-2  md:hidden">
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute flex flex-col top-16 right-0 w-half text-white bg-purple-400  border-4 shadow-2xl font-bold px-2 py-4 text-center transition-all duration-300 md:hidden">
          <NavLink to={"/react_car_shop/home"} className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to={"/react_car_shop/products"} className={getNavLinkClass}>
            products
          </NavLink>
          <NavLink to={"/react_car_shop/services"} className={getNavLinkClass}>
            Services
          </NavLink>
          <NavLink to={"/react_car_shop/contact"} className={getNavLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
