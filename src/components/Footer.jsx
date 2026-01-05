import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#ffeada] font-[Rubik] custom-footer pl-6 sm:pl-8 md:pl-10 lg:pl-0 mt-96">
        <div className="upper-footer flex flex-col lg:flex-row gap-10">
          <div className="initail-div flex flex-col gap-20">
            <p className="text-3xl text-[#000000] font-bold custom-footer-heading">
              Clarity, delivered straight into your inbox, biweekly.
            </p>
            <div className="detail flex">
              <span>
                <p className="custom-text">2,000hrs</p>
                <p className="leading-6 text-lg">Video Content</p>
              </span>

              <span>
                <p className="custom-text">190+</p>
                <p className="leading-6 text-lg">Countries</p>
              </span>

              <span>
                <p className="custom-text">100+</p>
                <p className="leading-6 text-lg">Events</p>
              </span>
            </div>

            <div className="email flex flex-col gap-2">
              <p className="text-2xl text-[#000000] font-semibold text-center md:text-left">
                Subscribe to our newsletter
              </p>
              <div className="input-email flex flex-row">
                <input
                  className="bg-white rounded-2xl p-4 text-sm custom-imput"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className="btn-custom group text-[15px] font-bold rounded-lg px-4 py-2.5 text-center me-2 mb-2 mt-1 ml-1"
                  >
                    <Link className="text-white" to={"/Events"}>
                      Start Now
                    </Link>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-sm pl-1 custom-icon transition-all ease-in-out duration-500 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-div flex justify-around mt-6 md:mt-8 lg:mt-0">
            <div className="footer-left">
              <ul className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Products</h3>
                <li className="custom-li">Bayyinah TV</li>
                <li className="custom-li">Events</li>
                <li className="custom-li">Gift</li>
                <li className="custom-li">Books</li>
                <li className="custom-li">Resources</li>
              </ul>

              <div className="social-links flex flex-col gap-2">
                <div>
                  <p className="text-2xl text-[#000000] font-semibold">
                    Follow us
                  </p>
                </div>
                <div className="social-link flex">
                  <span>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#4d0b00" }}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "#4d0b00" }}
                    />
                  </span>

                  <span>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#4d0b00" }}
                    />
                  </span>

                  <span>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ color: "#4d0b00" }}
                    />
                  </span>

                  <span>
                    <FontAwesomeIcon
                      icon={faTiktok}
                      style={{ color: "#4d0b00" }}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ color: "#4d0b00" }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-right">
              <ul className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Information</h3>
                <li className="custom-li">What we do</li>
                <li className="custom-li">Community</li>
                <li className="custom-li">Talent Hub</li>
              </ul>
            </div>
          </div>
          <div className="final-div bg-white hidden lg:flex flex-col">
            <div className="logo-custom">
              <img
                src="bayyinah-logo.png"
                alt="logo"
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-2xl font-semibold tracking-tight ">
              Bayyinah TV
            </h2>
            <p className="custom-p">Quran Studies Made Simple</p>
          </div>
        </div>

        <div className="lower-footer">
          <div className="left-lower-footer font-[Rubik]">
            <p className="text-center lg:text-left">
              Copyright © 2025 Bayyinah. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
