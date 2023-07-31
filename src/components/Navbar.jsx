import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="sticky top-0 bg-gray-800" >
      <nav className="flex top-0  justify-between items-center text-white h-24  max-w-[1240px] px-4 mx-auto">
        <NavLink to="/">
          <figure className="hover:cursor-pointer">
            <img src="img/logo.png" alt="logo" />
          </figure>
        </NavLink>

        <ul className="hidden md:text-2xl md:flex font-semibold xl:text-xl lg:text-2xl">
          <NavLink to="/">
            <li className="p-4 hover:cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink to="/products">
            <li className="p-4 hover:cursor-pointer">
              Products
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="p-4 hover:cursor-pointer" >
              About
            </li>
          </NavLink>
          <NavLink to="/login">
            <li className="p-4 hover:cursor-pointer" >
              Login/Logout
            </li>
          </NavLink>
          <NavLink to="/cart">
            <li className="p-4 hover:cursor-pointer" >
              Cart
              <span>(10)</span>
            </li>
          </NavLink>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className={!nav ? "fixed left-0 top-0 h-full w-[60%] border-r bg-black border-r-gray-900 ease-in-out duration-700" : "fixed left-[-100%]"}>
          <NavLink to="/">
            <figure className="hover:cursor-pointer ml-4"><img src="img/logo.png" alt="logo" />
            </figure>
          </NavLink>
          <ul className="pt-12 p-4 uppercase">
            <NavLink to="/">
              <li className="p-4 hover:cursor-pointer border-b border-blue-800" >
                Home
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="p-4 hover:cursor-pointer border-b border-blue-800" >
                Products
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="p-4 hover:cursor-pointer border-b border-blue-800" >
                About
              </li>
            </NavLink>
            <NavLink to="/login">
              <li className="p-4 hover:cursor-pointer border-b border-blue-800" >
                Login/Logout
              </li>
            </NavLink>
            <NavLink to="/cart"><li className="p-4 hover:cursor-pointer" >
              Cart
              <span>(10)</span>
            </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>);
};

export default Navbar;
