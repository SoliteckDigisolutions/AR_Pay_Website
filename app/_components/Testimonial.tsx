"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { testimonials } from "../constants"


export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[index]

  return (
    <section className="py-16  text-center">
      <h2 className="text-4xl text-[#155098] font-bold mb-2">What Our Users Say</h2>
      <p className="text-gray-500 text-2xl mb-10">
        Real stories from people whose businesses and lives have transformed with Easy5.
      </p>

      <div className="flex justify-center mx-4">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-xl shadow-lg rounded-2xl p-8 max-w-xl"
        >
          <p className="text-gray-700 mb-6">{testimonial.text}</p>

          <div className="font-semibold text-[#127bc7] text-lg">{testimonial.name}</div>
          <div className="text-gray-500 text-sm">{testimonial.role}</div>
        </motion.div>
      </div>
    </section>
  )
}


