import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



export default function ContactSection() {
  return (
    <section id = "contact" className="py-16 mt-10 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-[#155098] mb-4">
          Get in Touch with <span className="text-blue-600">AR Pay</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          We're here to help! Reach out for inquiries, partnerships, or support,
          and our team will get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition flex flex-col items-center gap-3">
            
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0995FA]/10 text-[#0995FA] text-xl">
              <FaPhoneAlt />
            </div>

            <h3 className="font-semibold text-lg text-[#155098]">Phone</h3>

            <a className="text-gray-600">+91 98765 43210</a>

          </div>

          {/* Email */}
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition flex flex-col items-center gap-3">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0995FA]/10 text-[#0995FA] text-xl">
              <FaEnvelope />
            </div>

            <h3 className="font-semibold text-lg text-[#155098]">Email</h3>

            <a className="text-gray-600">support@arpay.com</a>

          </div>

          {/* Office */}
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition flex flex-col items-center gap-3">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0995FA]/10 text-[#0995FA] text-xl">
              <FaMapMarkerAlt />
            </div>

            <h3 className="font-semibold text-lg text-[#155098]">Office</h3>

            <p className="text-gray-600 text-center">
              9th Floor, Office 901 <br />
              Technocity, Mahape <br />
              Navi Mumbai – 400701
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}