import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo-light.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useAuthContex } from "../../../Contex/AuthProvider";

const Header = () => {
  // state for mobile menu
  const [show, setShow] = useState(false);

  const { user, logout } = useAuthContex();
  const navigate = useNavigate();

  // handleLogout
  const handleLogout = () => {
    logout()
      .then(() => navigate("/"))
      .catch((err) => console.log(err.code));
  };

  // menu items
  const menuItems = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">services</NavLink>
      {user?.uid && (
        <>
          <NavLink to="/my-reviews">my reviews</NavLink>
          <NavLink to="/add-service">Add Service</NavLink>
        </>
      )}
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
            className="hidden gap-4 text-sm font-medium md:flex  justify-center header-nav"
          >
            {menuItems}
          </nav>

          <div className="items-center justify-end gap-4 sm:flex md:flex-1 header-nav">
            {!user?.uid ? (
              <Link
                className="rounded bg-blue-500 px-5 py-2 text-sm font-medium text-white"
                to="/signup"
              >
                Sign up
              </Link>
            ) : (
              <>
                <button
                  className="rounded bg-yellow-500 hover:bg-yellow-400 px-5 py-2 text-sm font-medium text-white"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </>
            )}
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
                <nav className="grid gap-2 capitalize">{menuItems}</nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
