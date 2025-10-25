import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideStartLearningButton, setHideStartLearningButton] = useState(false);

  useEffect(() => {
    // Check localStorage on component mount
    const shouldHide = localStorage.getItem('hideStartLearningButton') === 'true';
    setHideStartLearningButton(shouldHide);

    // Listen for custom event
    const handleSignupCompleted = () => {
      setHideStartLearningButton(true);
    };

    window.addEventListener('signupCompleted', handleSignupCompleted);

    return () => {
      window.removeEventListener('signupCompleted', handleSignupCompleted);
    };
  }, []);

  const handleShowmenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    if (showMenu) {
      setTimeout(() => setShowMenu(false), 300);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <>
      <div className="flex h-20 items-center min-w-full px-3 md:px-10 justify-between bg-[#fff2e9] custom-nav pt-4">
        <div className="flex items-center w-3/4">
          <div className="logo flex align-center h-12 gap-2 justify-center items-center">
            <div className="w-10 h-10">
              <img
                src="bayyinah-logo.png"
                alt="logo"
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-xl md:text-2xl">BAYYINAH</h2>
          </div>

          <div className={`menu-mobile ${showMenu ? "active" : ""}`}>
            <div
              className="links pl-14 flex gap-8 text-[
rgb(17, 17, 17)] text-sm md:text-lg"
            >
              <Link
                to={"/"}
                className="nav_links"
                onClick={() => {
                  setTimeout(() => setShowMenu(false), 300);
                }}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="nav_links"
                onClick={() => {
                  setTimeout(() => setShowMenu(false), 300);
                }}
              >
                About
              </Link>
              <Link
                to={"/events"}
                className="nav_links"
                onClick={() => {
                  setTimeout(() => setShowMenu(false), 300);
                }}
              >
                Events
              </Link>
              <Link
                to={"/startlearning"}
                className="nav_links"
                onClick={() => {
                  setTimeout(() => setShowMenu(false), 300);
                }}
              >
                Learning
              </Link>
              <Link
                to={"/admin"}
                className="nav_links"
                onClick={() => {
                  setTimeout(() => setShowMenu(false), 300);
                }}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center custom-login-button">
          {!hideStartLearningButton ? (
            <button
              type="button"
              className="btn-custom group hover:bg-[#841400] text-[15px] font-bold text-[#fff2e9] rounded-lg px-4 py-2.5 text-center me-2 mb-2"
            >
              <Link to={"/Login"}>Start Learning</Link>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white text-sm pl-1 custom-icon rotate-[-45deg] transition-all ease-in-out duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          ) : (
            <div 
              className="w-10 h-10 bg-[#c51f02] rounded-full flex items-center justify-center me-2 mb-2 cursor-pointer hover:bg-[#841400] transition-colors duration-300"
              style={{
                boxShadow: '0 2px 8px rgba(197, 31, 2, 0.3)'
              }}
              onClick={() => {
                localStorage.removeItem('hideStartLearningButton');
                setHideStartLearningButton(false);
              }}
            >
            </div>
          )}
        </div>

        <button onClick={handleShowmenu} className="text-2xl custom-menu">
          <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
        </button>
      </div>
    </>
  );
};

export default Navbar;