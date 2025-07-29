'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaTachometerAlt,
  FaCarAlt,
  FaImages,
  FaTools,
  FaChartBar,
  FaLock,
  FaThumbsUp,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaCar,
} from 'react-icons/fa';

const cards = [
  {
    icon: <FaTachometerAlt size={24} />,
    title: 'Odometer Verification',
    desc: 'Check for any tampering or rollback in mileage records across various inspections.',
  },
  {
    icon: <FaCarAlt size={24} />,
    title: 'Previous Ownership Records',
    desc: 'Discover how the vehicle was used — whether privately owned, leased, a taxi, or part of a rental fleet.',
    highlight: true,
  },
  {
    icon: <FaImages size={24} />,
    title: 'Sales History with Images',
    desc: 'View archived photos from past listings and auctions to assess the vehicle condition over time.',
  },
  {
    icon: <FaTools size={24} />,
    title: 'Damage & Accident Reports',
    desc: 'Uncover any hidden damage, major accidents, or structural repairs not disclosed by sellers.',
  },
  {
    icon: <FaChartBar size={24} />,
    title: 'Technical Specifications',
    desc: 'Get detailed specs including engine type, transmission, fuel economy, and manufacturing data.',
  },
  {
    icon: <FaLock size={24} />,
    title: ' Stolen Vehicle Check',
    desc: 'Verify the Vehicle Identification Number (VIN) against global theft databases to ensure it is not stolen.',
  },
];

const stats = [
  {
    icon: <FaMapMarkerAlt size={24} />,
    number: 25,
    label: 'Service Points',
    suffix: '+',
  },
  {
    icon: <FaThumbsUp size={24} />,
    number: 1100,
    label: 'Satisfied Clients',
    suffix: '+',
  },
  {
    icon: <FaClipboardCheck size={24} />,
    number: 1269,
    label: 'Projects Delivered',
    suffix: '+',
  },
  {
    icon: <FaCar size={24} />,
    number: 2589,
    label: 'VINs Checked',
    suffix: '+',
  },
];

const CarHistoryReport = () => {
  return (
    <section className="relative py-20 px-6 md:px-24 bg-gradient-to-br from-white via-gray-50 to-red-50 overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-red-100 rounded-full opacity-30 blur-2xl z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-black rounded-full opacity-10 blur-2xl z-0"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          🔍 Get the Full Story Before You <span className="text-red-600">Buy</span>
          
        </h2>
        <p className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">Trusted Global Vehicle History Reports at Your Fingertips</p>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-xl mx-auto">
Make informed car-buying decisions with <span className='bg-red-700 text-white p-1 font-bold '>WorldAutoTrace</span>. Instantly access verified reports covering every critical detail you need to know.        </p>
      </div>

      {/* Card Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`rounded-2xl p-6 shadow-lg backdrop-blur-md border border-gray-200 ${
              card.highlight
                ? 'bg-gradient-to-br from-red-600 to-red-700 text-white animate-pulse border-2 border-red-500'
                : 'bg-white text-gray-800 hover:shadow-xl transition-all'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-xl shadow-md ${
                  card.highlight ? 'bg-white text-red-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white border border-red-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
          >
            <div className="text-red-600 mb-2">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-900">
              <CountUp end={stat.number} duration={10} separator="," suffix={stat.suffix} />
            </h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CarHistoryReport;
