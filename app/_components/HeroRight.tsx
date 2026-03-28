"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { logos } from "../_constants/Images/ImageExport"

export default function HeroRight() {

  const floating = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full">

      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* Main Illustration */}
      {/* <motion.div
        variants={floating}
        animate="animate"
        className="relative z-10"
      >
        <Image
          src={logos.HUMAN}
          alt="AR Pay Illustration"
          width={500}
          height={600}
          className="drop-shadow-2xl"
        />
      </motion.div> */}

    </div>
  )
}