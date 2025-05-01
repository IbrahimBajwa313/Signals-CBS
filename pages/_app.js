import Footer2 from "@/components/Footer2";
import Header3 from "@/components/Header3";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import { useState, useEffect, createContext, useContext } from "react";
import Headroom from "react-headroom";
import Chatbot from "@/components/Chatbot";
import { Analytics } from "@vercel/analytics/react";

export const productInfo = createContext();

// using Context api to use functions in other files
export function MyContext() {
  return useContext(productInfo);
}

// App Function
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  // Page will remain same after reload
  useEffect(() => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const phoneNumber = "923325000418";
  const message =
    "AsslamoAlikum! I am contacting you through SGC Site. I want to donate for Gaza.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      
      <Head>
        <link rel="icon" href="/logo-main.jpg" />
        <title>Signals CBS</title>
      </Head>

      <Headroom>
        <Header3 />
      </Headroom>

      <Component {...pageProps} />

      <Footer2 />
    </>
  );
}
