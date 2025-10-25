import React from "react";
import heroBg from "../assets/quran-week-hero-bg.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <div
        className="container h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="text-[#fff2e9] h-full w-full xl:w-[50%] flex flex-col justify-center items-start gap-4 md:gap-5 lg:gap-5 pl-6 md:pl-12 lg:pl-20 custom-hero-text">
          <h1 className="font-[MPlayfair Display] text-[3rem] md:text-[70px] font-medium tracking-tighter">
            Quran Week
          </h1>
          <div className="font-[Rubik] font-medium">
            <p>
              The Quran will always be our primary pursuit. Ustadh Nouman has
              committed the next 15 years to completing a deeper study of the
              Quran.
            </p>

            <p>
              At Bayyinah, we have a vision that extends far beyond the present
              moment, built upon growth, service and a deep commitment to the
              Quran.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="btn-two-custom group text-[15px] font-bold rounded-lg px-4 py-2.5 text-center me-2 mb-2"
            >
              <Link to={"/Events"}>Discover an event</Link>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white text-sm pl-1 custom-icon rotate-[-45deg] transition-all ease-in-out duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
