import React from "react";

const FerrisWheel = () => {
  return (
    <div className="flex justify-center relative">
      {/* CENTER IMAGE (STAYS STILL) */}
      <img
        src="/logo-main.jpg"
        alt="Center Logo"
        className="absolute left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    h-[50px] w-[50px] 
                    lg:h-[100px] lg:w-[100px] 
                    xl:h-[150px] xl:w-[150px] 
                    rounded-full 
                    object-cover
                    z-10"
      />

      {/* ROTATING FERRIS WHEEL */}
      <div className="main-wrapper animate-rotateMain inline-block">
        <div
          className="animate-scaleUpDown relative 
                          lg:h-[250px] lg:w-[250px] 
                          xl:h-[350px] xl:w-[350px] 
                          rounded-full 
                          border-4 border-dashed border-green-500"
        >
          <div className="animate-rotateOrbit absolute h-full w-full">
            {/* First image */}
            <div className="absolute h-full w-full origin-center rotate-0">
              <div
                className="absolute left-1/2 top-0 
                                h-[40px] w-[40px] 
                                lg:h-[40px] lg:w-[40px] 
                                xl:h-[50px] xl:w-[50px] 
                                -translate-x-1/2 
                                lg:-translate-y-[20px] 
                                xl:-translate-y-[25px] 
                                transform 
                                rounded-full 
                                overflow-hidden 
                                bg-white"
              >
                <img
                  src="/home/eagle.png"
                  alt="Circle 1"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Second image */}
            <div className="absolute h-full w-full origin-center rotate-[90deg]">
              <div
                className="absolute left-1/2 top-0 
                                h-[40px] w-[40px] 
                                lg:h-[40px] lg:w-[40px] 
                                xl:h-[50px] xl:w-[50px] 
                                -translate-x-1/2 
                                lg:-translate-y-[20px] 
                                xl:-translate-y-[25px] 
                                transform 
                                rounded-full 
                                overflow-hidden 
                                bg-white"
              >
                <img
                  src="/home/book-2.jpg"
                  alt="Circle 2"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Third image */}
            <div className="absolute h-full w-full origin-center rotate-[180deg]">
              <div
                className="absolute left-1/2 top-0 
                                h-[40px] w-[40px] 
                                lg:h-[40px] lg:w-[40px] 
                                xl:h-[50px] xl:w-[50px] 
                                -translate-x-1/2 
                                lg:-translate-y-[20px] 
                                xl:-translate-y-[25px] 
                                transform 
                                rounded-full 
                                overflow-hidden 
                                bg-white"
              >
                <img
                  src="/home/bulb.png"
                  alt="Circle 3"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Fourth image */}
            <div className="absolute h-full w-full origin-center rotate-[270deg]">
              <div
                className="absolute left-1/2 top-0 
                                h-[40px] w-[40px] 
                                lg:h-[40px] lg:w-[40px] 
                                xl:h-[50px] xl:w-[50px] 
                                -translate-x-1/2 
                                lg:-translate-y-[20px] 
                                xl:-translate-y-[25px] 
                                transform 
                                rounded-full 
                                overflow-hidden 
                                bg-white"
              >
                <img
                  src="/home/atom.jpg"
                  alt="Circle 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerrisWheel;
