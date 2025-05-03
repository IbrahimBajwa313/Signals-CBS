import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import IntroCard from "@/components/IntroCard";
import HelpCounter from "@/components/HelpCounter";
import { useInView } from "react-hook-inview";
import Objectives from "@/components/home/Objectives";
import CBSActivitiesDesktop from "@/components/home/CBSActivitiesDesktop";
import CBSActivitiesMobile from "@/components/home/CBSActivitiesMobile";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-hidden w-[100%] z-20">
      <IntroCard />
      <Wrapper className="bg-black pt-20 poppins-medium flex flex-col gap-20">
        <Objectives />
        <CBSActivitiesDesktop />
        <CBSActivitiesMobile />
      </Wrapper>
    </main>
  );
}
