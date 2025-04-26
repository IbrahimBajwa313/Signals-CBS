import { useState } from "react";
import Link from "next/link";
import ListItem from "@/components/ListItem";
import Image from "next/image";

export default function Header() {
  const phoneNumber = "+923325000418";
  const message =
    "AsslamoAlikum! I am contacting you through SGC Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isIconClicked2, setIsIconClicked2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIconClicked(!isIconClicked);
    setIsDropdownOpen2(false);
    setIsIconClicked2(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsIconClicked2(!isIconClicked2);
    setIsDropdownOpen(false);
    setIsIconClicked(false);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const items2 = [
    { name: "About", url: "/about" },
    { name: "Events", url: "/events" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
  ];

  const list2 = items2.map((item, index) => {
    return <ListItem key={index} itemName={item.name} url={item.url} />;
  });

  return (
    <header
      className={`z-50 bg-[#111] text-white flex flex-col px-6 py-6 shadow-2xl transition-all duration-900 ease-in-out ${
        isDropdownOpen || isDropdownOpen2 ? "max-h-[1000px]" : "max-h-[90px]"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <div className="flex items-center space-x-4">
              <Image
                src="/save-gaza-logo.png"
                alt="Save Gaza Campaign Logo"
                className="h-12 w-12"
                height={48}
                width={48}
              />
              <span className="text-1xl md:text-2xl font-bold hover:text-gray-500">
                Signals CBS
              </span>
            </div>
          </Link>
        </div>

        {/* Navbar */}
        <nav className="flex items-center space-x-8">
          {/* Navigation Links */}
          <span className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                About
              </span>{" "}
            </Link>

            <Link href="/events">
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                Events
              </span>{" "}
            </Link>

            <Link
              // href="https://sgc-blogs-3.vercel.app/category/6762389a587d34c99391e320" Add link to blog once available
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                Blog
              </span>
            </Link>

            <Link href="/contact">
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                Contact
              </span>{" "}
            </Link>
          </span>

          <span
            className={`mr-2 cursor-pointer flex md:hidden ${
              isIconClicked2
                ? "text-green-500 -rotate-90"
                : "text-white rotate-0"
            } hover:text-green-500 transition-all duration-300`}
            onClick={toggleDropdown2}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="2" fill="currentColor" />
              <rect x="7" y="11" width="14" height="2" fill="currentColor" />
              <rect x="11" y="17" width="10" height="2" fill="currentColor" />
            </svg>
          </span>
        </nav>
        {/* Join Us Button */}
        <Link
          href={whatsappLink}
          legacyBehavior
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden md:flex bg-white hover:bg-green-500 hover:text-white rounded-full text-black px-6 py-2  transition-colors duration-300">
            Join Us
          </button>
        </Link>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Services</p>
          {/* {list1} */}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen2
            ? "max-h-70 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Check</p>
          {list2}
          <div
            onClick={handleToggle}
            className="flex items-center cursor-pointer"
          ></div>
        </div>
      </div>
    </header>
  );
}
