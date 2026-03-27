"use client"

import { motion } from "framer-motion"
import { billServices } from "../constants"

export default function Service() {

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

return (

<div id="services" className="w-full min-h-screen flex items-center  bg-gradient-to-b from-white to-blue-50">

<motion.section

initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={container}
className="max-w-7xl mx-auto px-6 w-full"
>

{/* Title */}
<div className="text-center mb-14">

<h1 className="text-4xl md:text-5xl font-bold text-[#155098] mb-4">
Our Services
</h1>

<p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
Explore the digital services AR Pay provides to make your life easier,
faster, and more secure — all from your trusted nearby shop.
</p>

</div>

{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

{billServices.map((i) => {

const Icon = i.icon

return (

<motion.div
key={i.id}
// variants={card}
whileHover={{ y: -10, scale: 1.04 }}
className="relative border border-gray-200 p-8 pt-14 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center bg-white"
>

{/* Icon */}
<div className="absolute -top-8 bg-gradient-to-r from-[#155098] to-[#0f6261] p-4 rounded-full shadow-lg">
<Icon className="text-3xl text-white" />
</div>

{/* Title */}
<h2 className="text-lg font-semibold text-[#0f6261] mt-2">
{i.title}
</h2>

</motion.div>

)

})}

</div>

</motion.section>

</div>

)
}