import { FaUsers, FaMapMarkerAlt, FaExchangeAlt, FaChartLine } from "react-icons/fa";
import{ statsData} from "../constants"
export default function Stats() {

return (
  <div className="grid py-6 px-6 md:px-12 mt-10 grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {statsData.map((item) => (
      <div
        key={item.id}
        className="bg-white shadow-lg p-6 rounded-2xl flex flex-col items-center gap-3"
      >
        
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#155098] to-[#0f6261] opacity-80 text-white text-xl">
          {item.icon}
        </div>

        {/* Value */}
        <h2 className="text-xl md:text-4xl  font-bold text-[#0995FA]">
          {item.value}
        </h2>

        {/* Label */}
        <p className="text-gray-600 text-sm md:text-base">
          {item.label}
        </p>

      </div>
    ))}

  </div>
);
}