'use client';

import { motion } from 'framer-motion';
import { FaHistory, FaCarSide, FaDollarSign, FaCogs, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';

const items = [
  {
    icon: <FaHistory size={28} />,
    title: 'Vehicle History',
  },
  {
    icon: <FaCarSide size={28} />,
    title: 'Vehicle Specifications',
  },
  {
    icon: <FaDollarSign size={28} />,
    title: 'Vehicle Valuation',
  },
  {
    icon: <FaCogs size={28} />,
    title: 'Vehicle Usage',
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: 'Maintenance Records',
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Safety Ratings',
  },
];

const IncludedReport = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        What’s Included <span className="text-red-600">In The Report</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-black to-red-600 rounded-xl p-6 text-white shadow-xl hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white text-red-600 p-3 rounded-full shadow-md group-hover:rotate-12 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent blur-2xl pointer-events-none transition duration-500" />
          </motion.div>
        ))}
      </div>

      {/* CTA Bar */}
      <div className="mt-16 bg-red-700 text-white py-10 px-6 rounded-xl text-center flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg md:text-xl font-semibold">
          Make an Informed Decision — <span className="underline">Check Your VIN Today</span>
          <p className="text-sm font-normal mt-1">Don't wait until it's too late. Check your VIN now and drive away with confidence.</p>
        </div>
        <button className="mt-2 md:mt-0 bg-white text-red-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          CHECK YOUR CAR
        </button>
      </div>
    </section>
  );
};

export default IncludedReport;
