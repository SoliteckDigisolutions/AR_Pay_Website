"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {messages} from "../constants"
export default function SlideText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center mt-10 bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 h-60  items-center text-center align-middle py-6  overflow-hidden">
      <motion.h2
        key={index}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-4xl font-semibold text-white text-center"
      >
        {messages[index]}
      </motion.h2>
    </div>
  )
}