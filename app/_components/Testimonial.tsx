"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sara Saroj",
    role: "Homemaker",
    text: "With Easy5, I started earning from my phone by helping my neighbours with mobile and DTH recharges. It's simple, reliable, and now I feel independent and proud."
  },
  {
    name: "Suresh Sharma",
    role: "Shop Owner",
    text: "Easy5’s support team is outstanding. They respond quickly and explain everything clearly. Managing digital payments has never been this smooth."
  },
  {
    name: "Rajesh Singh",
    role: "Retail Store Owner",
    text: "My business has grown significantly with Easy5. I can manage multiple operators and bill payments from one dashboard, saving time and keeping customers happy."
  },
  {
    name: "Ramesh Gupta",
    role: "Village Entrepreneur",
    text: "Through Easy5 utility bill payments, people in my village can pay their bills easily while I earn a fair commission. It's a true win-win."
  },
  {
    name: "Jagat Pal",
    role: "Mobile Shop Owner",
    text: "Using Easy5 for daily recharges and transactions has boosted my business. Everything is transparent, fast, and secure."
  }
]

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


