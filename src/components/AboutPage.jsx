import React from "react";
import aboutFirst from "../assets/about-conatiner-fisrt.png";
import aboutSec from "../assets/about-img-2.jpg";
import aboutThird from "../assets/quote-vector-bg.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 lg:gap-1  items-start lg:flex-row  pt-16">
        <div className="font-[Rubik] lg:w-[50%] w-full pr-7 pl-10">
          <div className="heading text-[2.25rem] text-[#801301] font-semibold leading-tight ">
            The journey of self-discovery, of intellectual and spiritual growth,
            is what Bayyinah is all about.
          </div>

          <div className="description text-[20px] leading-7 text-black font-normal flex flex-col gap-4 mt-8">
            Despite being born a Muslim, I did not understand Allah’s book, and
            as a teenager, I found myself in I'tikaaf during Ramadan at the
            Muslim Center of New York City, tears streaming down my face out of
            shame that Allah is talking to me and I can’t understand him. Yet, I
            poured my heart out to Allah, yearning to hear His voice.
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%] pr-7 pl-10">
          <img className="rounded-xl w-[90%]" src={aboutFirst} />
        </div>
      </div>

      {/* container-2  */}

      <div className=" flex items-start gap-8 lg:gap-1 flex-col lg:flex-row  pt-16 ">
        <div className="w-[100%] lg:w-[50%] pr-7 pl-10">
          <img className="rounded-xl w-[90%]" src={aboutSec} />
        </div>

        <div className="font-[Rubik] lg:w-[50%] w-full pr-7 pl-10">
          <div className="heading text-[2.25rem] text-[#801301] font-semibold leading-tight">
            "Just make the Quran easy for me,"
          </div>

          <div className="description text-[20px] leading-7 text-black font-normal flex flex-col gap-4 mt-8">
            <p>
              I pleaded, knowing that within its verses lay the answers I
              sought.
            </p>

            <p>
              And so, my journey of discovery began—not with the goal of
              reaching its end, but with the intention of drawing closer to the
              endless well of wisdom contained within the Quran.
            </p>

            <p>
              Each Surah, each Ayah, became a revelation, a mirror reflecting my
              own journey, my own struggles, my own aspirations. The Quran
              became my refuge in times of desperation, my source of healing.
            </p>
          </div>
        </div>
      </div>

      <div className="container-padding p-32 w-[92.4%] m-auto rounded-md">
        <h1 className="text-center font-custom text-white text-xl lg:text-3xl font-bold">
          With each study session, I realized how little I truly knew, yet how
          much there was to learn.
        </h1>

        <p className="text-[20px] font-[Rubik] text-white text-center mt-5">
          And in that realization, I found humility, awe and an insatiable
          thirst for more.
        </p>
      </div>
    </>
  );
};

export default About;
