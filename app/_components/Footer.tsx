export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + Certification */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">AR Pay</h2>
            <p className="text-sm opacity-90">
              ISO 0000:0015 Certified Company
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
          © 2026  Soliteck Digisolutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}