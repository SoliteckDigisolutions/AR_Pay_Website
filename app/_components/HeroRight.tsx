"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import BannersBack from "@/app/_constants/Images/Logos/ARpay-homescreen-hero-vector-original-color.svg"
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

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* Main Illustration */}
      <motion.div
        // variants={floating}
        animate="animate"
        className="relative z-10"
      >
        {/* <Image
          src={''}
          alt="AR Pay Illustration"
          width={560}
          height={650}
          className="lg:drop-shadow-2xl hidden "
        /> */}
      </motion.div>

     

    </div>
  )
}