"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { logos } from "../_constants/Images/ImageExport";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../constants";
import axios, { AxiosResponse } from "axios";
import { useRouter, usePathname } from "next/navigation";

interface ApiRespose {
  responseCode: number;
  responseMessage: string;
  data: any;
  responseData: string;
  signalR: any;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [redirectURL, setRedirectURL] = useState("");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const KEY = process.env.NEXT_PUBLIC_AUTH_KEY;

  useEffect(() => {
    axios
      .get(`${BASE_URL}api/WLUser/Auth/WhitelableUser?Authkey=${KEY}`)
      .then((response: AxiosResponse<ApiRespose>) => {
        const parsedData = JSON.parse(response.data.responseData);
        const brandingData = parsedData[0];

        brandingData.LoginImg =
          brandingData.LoginImg === "NULL" ? "" : brandingData.LoginImg;

        const fixedUrl = brandingData.URL.replace(/\\\//g, "/").replace(
          /^http:\\\\/,
          "http://"
        );

        const encoded = encodeURIComponent(JSON.stringify(brandingData));
        const targetURL = `${fixedUrl}?brandingData=${encoded}`;

        setRedirectURL(targetURL);
      })
      .catch((err) => console.log(err));
  }, [BASE_URL, KEY]);

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/#home");
    } else {
      document
        .getElementById("home")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
  <div className="flex h-15 items-center justify-between px-4 sm:px-6 py-4">
        
        {/* Logo */}
        <Image
          onClick={handleLogoClick}
          src={logos.ar_pay_logo}
          alt="AR Pay Logo"
          className="w-28 cursor-pointer"
        />

       {/* Desktop Menu */}
<div className="hidden lg:flex gap-6 items-center">
  {links.map((item, index) => {
    const href =
      item.type === "page"
        ? `/${item.id}`
        : `/#${item.id}`;

    const isActive =
  item.type === "page"
    ? pathname === `/${item.id}`
    : pathname === "/" && activeSection === item.id;

    return (
      <Link
        onClick={() => setActiveSection(item.id)}
        key={item.id ?? index}
        href={href}
        className={`text-lg cursor-pointer border-b-2 border-transparent
          transition-all duration-300 ${
            isActive
              ? "text-[#0995FA] border-[#0995FA]"
              : "text-black hover:text-[#0995FA] hover:border-[#0995FA]"
          }`}
      >
        {item.name}
      </Link>
    );
  })}


          <button
            onClick={() => window.location.assign(redirectURL)}
            className="bg-gradient-to-r from-[#155098] to-[#0f6261] text-white px-6 py-2 rounded-md"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes color="blue" /> : <FaBars color="black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6">
          {links.map((item, index) => {
            const href =
              item.type === "page"
                ? `/${item.id}`
                : `/#${item.id}`;

            return (
              <Link
                key={index}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-black text-lg hover:text-[#0995FA]"
              >
                {item.name}
              </Link>
            );
          })}

          <button
            onClick={() => window.location.assign(redirectURL)}
            className="bg-gradient-to-r from-[#155098] to-[#0995FA] text-white px-6 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      )}
    </section>
  );
}