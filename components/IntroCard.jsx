import React from "react";
import Image from "next/image";
import Link from "next/link";
import FerrisWheel from "./FerrisWheel";

const IntroCard = () => {
  const phoneNumber = "+923325000418";
  const message =
    "AsslamoAlikum! I am contacting you through SGC Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className="relative h-[90vh] bg-cover bg-center poppins"
      // style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      {/* Content Section */}
      <div className="relative flex flex-col items-center md:flex-row md:items-center md:justify-between justify-center h-full text-white px-6 md:px-24">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-green-500">Signals</span> <br />
            <span className="text-green-500">C</span>haracter{" "}
            <span className="text-green-500">B</span>uilding{" "}
            <span className="text-green-500">S</span>ociety
          </h1>
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
            To instill unwavering moral and ethical values in Signalians while
            reconnecting hearts and minds with the guiding principles of the
            Quran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href={whatsappLink} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button className="text-lg md:text-xl font-bold bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-all ease-in-out duration-200">
                  Join Us
                </button>
              </a>
            </Link>
            <Link href={"/virtualAdoption"}>
              <button className="text-lg md:text-xl font-bold bg-transparent border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-white hover:bg-green-500 hover:text-[#fff] hover:border-green-500 transition-all ease-in-out duration-200">
                Upcoming Events
              </button>
            </Link>
          </div>
        </div>
        {/* Ferris Wheel Animation - Hidden on smaller screens*/}
        <div className="hidden lg:block">
          <FerrisWheel />
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
