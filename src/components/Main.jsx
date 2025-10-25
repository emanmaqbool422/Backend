import React from "react";
import quranWeek from "../assets/quran-week-thumbnail-updated.png";
import storyNight from "../assets/story-night-thumbnail-updated.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <section className="container">
        <div>
          <div className="container-top">
            <h1 className="font-[MPlayfair Display] text-[2rem] md:text-[56px] text-center font-medium tracking-tighter leading-none text-[#801301] mb-14 mt-24">
              Experience the beauty of Quran studies and storytelling firsthand.
            </h1>
          </div>
          <div className="container-buttom gap-3 flex flex-col md:flex-row justify-center items-center">
            <div
              className="image-1 h-screen bg-cover lg:bg-cover bg-no-repeat w-[95%] lg:w-[50%]"
              style={{ backgroundImage: `url(${quranWeek})` }}
            >
              <div className="text-[#fff] w-full flex flex-col justify-start items-center gap-4 md:gap-5 lg:gap-5 pl-6 md:pl-12 lg:pl-20 custom-hero-text mt-12 p-6">
                <h1 className="font-[MPlayfair Display] text-[2rem] md:text-[50px] font-medium tracking-tighter">
                  Quran Week
                </h1>
                <div className="font-[Rubik] font-medium text-center font-[18px]">
                  <p>
                    Dive deeper into a single Surah during our Quran Week, where
                    discussions and focused sessions provide an opportunity for
                    exploration and reflection on the divine message.
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className="btn-custom group text-[15px] font-bold rounded-lg px-4 py-2.5 text-center me-2 mb-2"
                  >
                    <Link to={"/Events"}>Learn more</Link>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-sm pl-1 custom-icon transition-all ease-in-out duration-500 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="image-2 h-screen bg-cover lg:bg-cover bg-no-repeat w-[95%] lg:w-[50%]"
              style={{ backgroundImage: `url(${storyNight})` }}
            >
              <div className="text-[#fff] w-full flex flex-col justify-start items-center gap-4 md:gap-5 lg:gap-5 pl-6 md:pl-12 lg:pl-20 custom-hero-text mt-12 p-6">
                <h1 className="font-[MPlayfair Display] text-[2rem] md:text-[50px] font-medium tracking-tighter">
                  Story Night
                </h1>
                <div className="font-[Rubik] font-medium text-center font-[18px]">
                  <p>
                    Experience the beauty of Story Nights as timeless narratives
                    from the Quran, Hadith and Islamic history come to life,
                    uplifting the entire family, Muslims and Non-Muslims alike.
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className="btn-custom group text-[15px] font-bold rounded-lg px-4 py-2.5 text-center me-2 mb-2"
                  >
                    <Link to={"/Events"}>Learn more</Link>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-sm pl-1 custom-icon transition-all ease-in-out duration-500 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
