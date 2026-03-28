export default function Service() {
  return (
    <section
      id="about"


  
      className="w-full h-screen  py-10 bg-gray-100 text-white flex items-center px-6  "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-5xl   rounded-xl  text-[#155098]  font-semibold mb-4">
            Our Mission
          </h3>
          <h2 className="text-3xl text-neutral-900 md:text-5xl font-bold">
            Empowering Local Businesses
          </h2>

          <p className="text-lg text-black  leading-relaxed">
            AR Pay empowers small business owners with smart digital tools to
            expand revenue effortlessly. We’re not just a service - we’re your
            partner in the digital transformation journey.
          </p>

          <p className="text-lg  text-black leading-relaxed">
            With trusted technology, reliable infrastructure, and a skilled
            team, we aim to bring transparency, opportunity, and convenience to
            every corner of our country.
          </p>

          {/* <button className=" bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Learn More
          </button> */}
        </div>

        {/* Right Content */}
        <div className=" backdrop-blur-md   p-6 z-0 rounded-xl shadow-sm">
          <p className="text-lg  leading-relaxed   text-black">
            Together, let’s embrace the future and experience a new digital
            world - all in one place with AR Pay. Our mission is to simplify
            digital services and make them accessible through trusted local
            shops.
          </p>
        </div>
      </div>
    </section>
  );
}
