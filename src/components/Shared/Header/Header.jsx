import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo-light.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  // state for mobile menu
  const [show, setShow] = useState(false);

  // menu items
  const menuItems = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">services</NavLink>
    </>
  );

  return (
    <header className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link to="/">
              <img src={logo} alt="Logo" width={170} />
            </Link>
          </div>

          <nav
            aria-label="Global"
            className="hidden gap-8 text-sm font-medium md:flex md:flex-1 justify-center header-nav"
          >
            {menuItems}
          </nav>

          <div className="items-center justify-end gap-4 sm:flex md:flex-1">
            <Link
              className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
              to="/signup"
            >
              Sign up
            </Link>
          </div>

          <div className="md:hidden ">
            <button
              className="rounded-lg bg-gray-100 p-3 transition text-gray-600 hover:bg-blue-500 hover:text-white"
              type="button"
              onClick={() => setShow(!show)}
            >
              <FaBars />
            </button>
            {show && (
              <div className="mobile-menu transi border absolute w-28 right-3 top-24 bg-white p-3 shadow-lg rounded">
                <nav className="grid gap-2 ">{menuItems}</nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
