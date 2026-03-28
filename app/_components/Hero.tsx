import Image from "next/image";
import Heroleft from "./Heroleft";
import HeroRight from "./HeroRight";
import Stats from "./Stats";
import { logos } from "../_constants/Images/ImageExport";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between lg:justify-evenly gap-10 text-white lg:px-6 px-4 lg:gap-6"
    >
      {/* Background Image */}
      <Image
        src={logos.HUMAN}
        alt="background"
        fill
        priority
        className="object-cover  -z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 -z-10"></div>

      <div className="lg:w-[60%] lg:mt-0 mt-28">
        <Heroleft />
      </div>

      <div className="lg:w-[40%]">
        {/* <HeroRight /> */}
      </div>
    </div>
  );
}