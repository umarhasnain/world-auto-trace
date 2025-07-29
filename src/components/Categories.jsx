'use client';
import { motion } from 'framer-motion';
import { FaCarSide, FaTools, FaSearch, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';

const categories = [
  { title: 'Vehicle History', icon: <FaSearch />, desc: 'Check the complete history of any car.' },
  { title: 'Inspection Reports', icon: <FaClipboardCheck />, desc: 'Detailed multi-point inspection reports.' },
  { title: 'Accident Check', icon: <FaShieldAlt />, desc: 'Ensure zero accidental records.' },
  { title: 'Maintenance Records', icon: <FaTools />, desc: 'Review service & maintenance logs.' },
  { title: 'Ownership Records', icon: <FaCarSide />, desc: 'Know how many owners the car had.' },
];

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 uppercase">Explore Our Categories</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">We cover every angle of car inspection and vehicle history you care about.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border-4 border-red-600 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <div className="text-red-600 text-4xl mb-4 group-hover:animate-pulse">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{category.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
