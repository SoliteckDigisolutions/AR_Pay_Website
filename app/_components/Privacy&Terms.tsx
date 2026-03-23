"use client"

import Image from "next/image"
import { logos } from "../_constants/Images/ImageExport"

export default function PrivacyTerms() {
  return (
    <section id ="privacy" className="px-4 md:px-10 mt-10">
      
      <div className="bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10">

        {/* Left Button */}
        <div className="w-full md:w-auto flex justify-center">
          <button className="w-full md:w-64 py-4 bg-white text-[#155098] font-semibold rounded-xl hover:bg-gray-100 transition">
            Privacy Policy
          </button>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6 md:p-8 max-w-xl w-full">

          <Image
            className="w-32 md:w-40 h-auto mb-4"
            alt="AR Pay Logo"
            src={logos.ar_pay_logo}
          />

          <h1 className="text-2xl md:text-4xl font-bold text-[#155098] mb-3">
            Privacy Policy
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-md">
            Transparency and trust — that’s what powers AR Pay’s commitment
            to protecting your data and ensuring secure digital transactions.
          </p>

        </div>

        {/* Right Button */}
        <div className="w-full md:w-auto flex justify-center">
          <button className="w-full md:w-64 py-4 bg-white text-[#155098] font-semibold rounded-xl hover:bg-gray-100 transition">
            Terms & Conditions
          </button>
        </div>

      </div>

    </section>
  )
}