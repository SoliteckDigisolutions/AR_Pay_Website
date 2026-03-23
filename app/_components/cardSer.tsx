"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaServer, FaCheckCircle } from "react-icons/fa";

export default function CardSer() {

const servicesData = [
  {
    id: 1,
    title: "Quality Guaranteed",
    description:
      "Easy5’s in-house technical team ensures uninterrupted service delivery — so you never have to worry again.",
    icon: <FaCheckCircle size={28} />,
  },
  {
    id: 2,
    title: "Fastest Servers",
    description:
      "Powered by cutting-edge cloud technology, Easy5 runs on some of the fastest servers worldwide for unmatched performance.",
    icon: <FaServer size={28} />,
  },
  {
    id: 3,
    title: "Safety Guaranteed",
    description:
      "Your payments are 100% safe with us. Easy5 follows strict security and accounting compliance to protect every transaction.",
    icon: <FaShieldAlt size={28} />,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

return (
<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex flex-col md:flex-row items-center justify-center gap-15.5 mt-10 p-0"
>

{servicesData.map((i) => (
  <motion.div
    key={i.id}
    // variants={card}
    whileHover={{ y: -8, scale: 1.03 }}
    className="flex flex-col gap-4 shadow-lg border border-gray-100 bg-white p-6 rounded-2xl max-w-sm transition-all"
  >

    {/* Icon */}
    <div className="w-14 h-14 flex items-center justify-center rounded-xl text-white bg-gradient-to-r from-[#155098] to-[#0f6261] shadow-md">
      {i.icon}
    </div>

    {/* Title */}
    <h2 className="text-xl font-semibold text-[#0f6261]">
      {i.title}
    </h2>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed">
      {i.description}
    </p>

  </motion.div>
))}

</motion.div>
);
}