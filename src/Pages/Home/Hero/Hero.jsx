// import { useEffect, useState } from "react";
import "./Hero.css";
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";
import { Link, useLoaderData } from "react-router-dom";

const Hero = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const services = useLoaderData();
  return (
    <div id="hero-slider">
      <AwesomeSlider>
        {services?.map((s) => (
          <div
            className="single-hero-slider"
            key={s.title}
            style={{ background: `url(${s.image}) no-repeat center / cover` }}
          >
            <div className="max-w-4xl">
              <h2 className="text-5xl text-white font-bold">{s.title}</h2>
              <p className="text-white opacity-75 my-10">{s.desc}</p>
              <div className="hero-buttons">
                {/* Left */}

                <Link
                  className="group relative inline-block overflow-hidden border border-yellow-500 px-8 py-3 focus:outline-none focus:ring mr-4"
                  to="/"
                >
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-yellow-500 transition-all group-hover:w-full group-active:bg-yellow-500"></span>

                  <span className="relative text-sm font-medium text-yellow-500 transition-colors group-hover:text-white">
                    Book Now
                  </span>
                </Link>

                {/* Right */}

                <Link
                  className="group relative inline-block overflow-hidden border border-yellow-500 px-8 py-3 focus:outline-none focus:ring"
                  to="/"
                >
                  <span className="absolute inset-y-0 right-0 w-[2px] bg-yellow-500 transition-all group-hover:w-full group-active:bg-yellow-500"></span>

                  <span className="relative text-sm font-medium text-yellow-500 transition-colors group-hover:text-white">
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Hero;
