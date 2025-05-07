import React from "react";
import Image from "next/image"; 
import Wrapper from "@/components/Wrapper";
import About from "@/components/About";

// pages/about.js

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Wrapper>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-10">
          <About />
          {/* <section className="bg-white p-4 md:p-6 rounded-3xl shadow-md"> */}
            <h2 className="font-extrabold text-center text-xl sm:text-2xl lg:text-3xl mb-4">
              Our Mission and Vision
            </h2>
             
        </main>
      </Wrapper>
    </div>
  );
}
