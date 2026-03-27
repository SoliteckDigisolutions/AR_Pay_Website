"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import Image from "next/image";
import { logos } from "../_constants/Images/ImageExport";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../constants";
import axios, { AxiosResponse } from "axios";

interface ApiRespose {
  responseCode: number;
  responseMessage: string;
  data: any;
  responseData: string;
  signalR: any;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>()
  console.log(active)
  const [redirectURL, setRedirectURL] = useState<string>("");
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const KEY = process.env.NEXT_PUBLIC_AUTH_KEY;
  console.log(BASE_URL);
  useEffect(() => {
    axios
      .get(`${BASE_URL}api/WLUser/Auth/WhitelableUser?Authkey=${KEY}`)
      .then((response: AxiosResponse<ApiRespose>) => {
        const apiresponse: {
          responseCode: number;
          responseMessage: string;
          data: null;
          responseData: string;
          signalR: null;
        } = response.data;
        const parsedData =
          response.data && JSON.parse(apiresponse?.responseData);

        const brandingData = parsedData[0];
        console.log("Branding data -", brandingData);
        // Fix NULL LoginImg
        brandingData.LoginImg =
          brandingData.LoginImg === "NULL" ? "" : brandingData.LoginImg;
        // Fix escaped URL
        const fixedUrl = brandingData.URL.replace(/\\\//g, "/").replace(
          /^http:\\\\/,
          "http://",
        );
        // Encode data
        const encoded = encodeURIComponent(JSON.stringify(brandingData));
        const targetURL = `${fixedUrl}?brandingData=${encoded}`;
        // console.log(targetURL);
        setRedirectURL(targetURL);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="fixed w-full mb-20 bg-white shadow-lg z-50">
      <div className="flex h-15 items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image  src={logos.ar_pay_logo} alt="AR Pay Logo" className="w-28 cursor-pointer " />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {links.map((item, index) => (
            <Link
              onClick={()=> setActive(item.name)}
              key={index}
              href={
                item.name == "Privacy Policy"
                  ? `/${item.id}`
                  : item.name == "Term & Condition"
                    ? `/${item.id}`
                    : `/#${item.id}`
              }
             className={
  active === item.name
    ? "text-[#0995FA] transition-all duration-400 text-lg border-b-2 border-[#0995FA] cursor-pointer"
    : "text-black text-lg  hover:text-[#0995FA] hover:border-b-2 hover:border-[#0995FA] cursor-pointer"
}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => (window.location.href = redirectURL)}
            className="bg-gradient-to-r cursor-pointer  from-[#155098] to-[#0f6261] text-white px-6 py-2 rounded-md"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes color="blue" /> : <FaBars color="black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6">
          {links.map((item, index) => (
            <a
              key={index}
               href={
                item.name == "Privacy Policy"
                  ? `/${item.id}`
                  : item.name == "Term & Condition"
                    ? `/${item.id}`
                    : `/#${item.id}`
              }
              onClick={() => setMenuOpen(false)}
              className="text-black text-lg hover:text-[#0995FA]"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => (window.location.href = redirectURL)}
            className="bg-gradient-to-r from-[#155098] to-[#0995FA] text-white px-6 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      )}
    </section>
  );
}
