"use client"

import { motion } from "framer-motion"
import { FaBolt, FaFire, FaMoneyBillWave } from "react-icons/fa"
import {billServices} from "../constants"
export default function Service(){



const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

return(
<div className="">
<motion.div
id = "services"
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={container}
className="min-h-fit flex flex-col gap-2 lg:mx-10 m-4 p-6 rounded-2xl mt-10 bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-90"
>

<h1 className="text-white text-center text-5xl font-semibold">
Our Services
</h1>

<p className="text-center text-white max-w-2xl mx-auto">
Explore the digital services AR Pay provides to make your life easier, faster, and more secure — all from your trusted nearby shop.
</p>

<div className="flex lg:flex-row flex-col lg:px-10 lg:gap-6 gap-10 mt-10 justify-center">

{
billServices.map((i) => {
const Icon = i.icon

return (

<motion.div
key={i.id}
// variants={card}
whileHover={{ y: -8, scale: 1.05 }}
className="relative border border-gray-200 p-6 pt-12 w-full flex flex-col items-center justify-center bg-white text-black h-40 rounded-xl shadow-xl"
>

{/* Floating Icon */}
<div className="absolute -top-8 bg-gradient-to-r from-[#155098] to-[#0f6261] p-4 rounded-full shadow-lg">
<Icon className="text-3xl text-white" />
</div>

{/* Title */}
<h1 className="text-lg text-center font-semibold text-[#0f6261]">
{i.title}
</h1>

</motion.div>

)
})
}

</div>

</motion.div>
</div>
)
}