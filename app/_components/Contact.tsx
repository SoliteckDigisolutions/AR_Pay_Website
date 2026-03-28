"use client"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 flex items-center bg-gradient-to-b from-gray-50 to-blue-50"
    >
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#155098] mb-4">
            Get in Touch with <span className="text-blue-600">AR Pay</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help! Reach out for inquiries, partnerships, or support,
            and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Phone */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center">

            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
              <FaPhoneAlt />
            </div>

            <h3 className="text-xl font-semibold text-[#155098] mb-2">
              Phone
            </h3>

            <a
              href="tel:+918693891074"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              +91 8693891074
            </a>

          </div>

          {/* Email */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center">

            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
              <FaEnvelope />
            </div>

            <h3 className="text-xl font-semibold text-[#155098] mb-2">
              Email
            </h3>

            <a
              href="mailto:arpaycoustomersupport@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition break-all"
            >
              arpaycoustomersupport@gmail.com
            </a>

          </div>

          {/* Office */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center">

            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-xl font-semibold text-[#155098] mb-2">
              Office
            </h3>

            <p className="text-gray-600">
              Shop no. 1 <br />
              Mourya Malhar Apartment <br />
              Near TMC School, Shilgaon 421204
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}