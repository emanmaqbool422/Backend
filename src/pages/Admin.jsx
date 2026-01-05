import React from "react";
import AdminImg from "../assets/Admin-image.jpeg";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="background-custom pt-5 h-[100vh] flex pb-5 w-full">
        <div
          className="custom-image text-white rounded-3xl mb-10 h-[80vh] p-14 gap-14 flex flex-col items-start justify-center w-[92.4%] m-auto"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%), url(${AdminImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h1 className="text font-[Rubik] font-bold text-[3rem] bg-[#4d0b00]">Bayyinah Events Interest Form</h1>

          <span className="text font-[Rubik] font-semibold text-[20px] bg-[#4d0b00] py-2">
            Complete this form to request a Bayyinah program in your city
          </span>
          <div className="text flex flex-col py-2 bg-[#4d0b00]">
          <span className="font-[Rubik] font-normal text-[16px] ">
            Priority will be given to direct contacts within organizations who
            already have venue spaces. 
          </span>
          <span className="font-[Rubik] font-normal text-[16px] ">
            Due to high volume of requests, we are unable to respond to each one individually.
          </span>
          </div> 
         <button className="start-button font-[Rubik]">
          <Link to={"/addEvent"}>Start Now</Link>
         </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
