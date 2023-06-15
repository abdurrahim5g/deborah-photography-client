import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/images/logo-light.png";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Link>
            <img src={logo} alt="Logo" width={230} />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center leading-relaxed text-gray-500">
          The Magic of Frozen Moments: Discovering the Power of Photography{" "}
          <br />
          Capturing Life Kaleidoscope: Exploring the Artistry of Photography
        </p>

        <div className="mt-12 flex justify-center gap-6 md:gap-8 footer-social">
          <Link>
            <FaFacebookF />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaDribbble />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
