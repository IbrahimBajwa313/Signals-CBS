import React, { useState } from "react";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-12 bg-blue-50">
      <Heading
        className="mb-10 text-[#1a1a1a] text-5xl font-extrabold text-center"
        text="About Us"
      />

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* left */}
        <div className="w-full md:w-[57%] h-auto md:h-[60vh] rounded-2xl bg-[#fff] shadow-lg text-black">
          <h3 className="text-3xl md:text-5xl text-center bg-[#22C55E] p-6 rounded-t-2xl text-white">
            Save Gaza Campaign
          </h3>
          {/* 
          <hr className="border-2 rounded-2xl my-4 border-[#22C55E]" /> */}

          <div className="flex flex-col h-auto md:h-[80%] justify-evenly p-8">
            <p className="text-sm md:text-lg font-normal pt-4">
              <span className="font-semibold text-[#22C55E]">
                Save Gaza Campaign
              </span>{" "}
              is a movement of hope and resilience, uniting voices for justice
              and compassion. Since our inception in November 2023, we strive to
              uplift the oppressed and foster solidarity among communities,
              ensuring that every individual feels valued and heard.
            </p>

            <br />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-semibold text- md:text-xl">
                Join Us in Making a Difference!
              </p>

              <Link href="/about">
                <div
                  className="text-sm md:text-lg flex flex-row gap-4 w-full md:w-48 justify-center items-center p-3 py-2 md:p-4 rounded-full mt-4 md:mt-0 ml-auto font-semibold bg-[#22C55E] text-white hover:bg-[#D0312D] hover:text-[#fff] transition-all ease-in-out duration-200"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <p>About Us</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className={`size-5 md:size-6 ${
                      isHovered ? "animate-move-right" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-[41%] h-auto md:h-[70vh] rounded-2xl bg-[#fff] text-black shadow-lg ">
          <h3 className="text-3xl md:text-4xl text-center bg-[#22C55E] rounded-t-2xl p-4 text-white">
            SGC Relief Activities
          </h3>

          {/* <hr className="border-2 rounded-2xl my-3 border-[#22C55E]" /> */}

          <div className="flex flex-col h-auto md:h-[80%] justify-evenly p-8">
            <p className="text-sm md:text-lg font-normal pt-4">
              <span className="font-semibold text-[#22C55E]">
                SGC Relief Activities
              </span>{" "}
              deals with all donations and relief efforts for the people of
              Palestine. Our goal is to help the people in need in any way
              possible and make whatever effort we can by donating clothes,
              food, medicine and money.
            </p>
            <p className="text-sm md:text-lg font-normal pt-4">
              We with our partner <span className="font-semibold text-[#22C55E]">Shab-e-AbiTalib </span> want to make the most
              difference.
            </p>

            <div className="flex flex-col  justify-center items-center ">
              <p className="text- md:text-xl font-semibold pt-4">
                Check out our activities in Gaza!
              </p>

              <Link href="https://sgc-blogs-3.vercel.app/category/6762389a587d34c99391e320">
                <div
                  className="text-sm md:text-base flex flex-row gap-4 justify-center items-center px-8 py-4  bg-[#22C55E] text-white rounded-full mt-4 font-semibold hover:bg-[#D0312D] hover:text-[#fff] transition-all ease-in-out duration-200"
                  style={{
                    boxShadow: "0px 10px 30px rgba(0,0,0,.2)",
                  }}
                >
                  All Activities
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
