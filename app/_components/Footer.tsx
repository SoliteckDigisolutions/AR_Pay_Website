import Image from "next/image";
import footerLogo from "../_constants/Images/Logos/AR PAY LOGO.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Certification */}
          <div className="text-center mb-2 md:text-left">
            <div className="flex mb-2">
              <Image
                className="bg-white p-2 rounded-2xl"
                src={footerLogo}
                alt="footer"
                width={100}
                height={100}
              />
              <Image src={"/ISO.png"} alt="ISO LOGO" width={120} height={120} />
            </div>

            <p className="text-sm opacity-90">
              An ISO 9001:2015 Certified Company
            </p>
          </div>

          {/* Quick Info */}
          <div className="text-center">
            <p className="text-sm">
              Empowering digital payments across local businesses
            </p>
          </div>

          {/* Designer Credit */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              Designed by{" "}
              <span className="font-semibold">
                Soliteck Digisolutions Pvt. Ltd
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm opacity-90">
          © 2026 AR Enterprises Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
