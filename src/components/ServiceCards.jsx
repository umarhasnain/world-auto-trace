"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaTools,
  FaHistory,
  FaClipboardCheck,
  FaCarCrash,
  FaBalanceScale,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHistory />,
    title: "Title History",
    description:
      "Get complete DMV title details for USA, Canada, UK & Northern Ireland with official sources like NMVTIS.",
    color: "from-sky-400 to-sky-600",
  },
  {
    icon: <FaCarCrash />,
    title: "Junk / Salvage",
    description:
      "Identify vehicles that were salvaged, scrapped, or considered total losses via insurance or auctions.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: <FaShieldAlt />,
    title: "Title Brand",
    description:
      "See over 70+ title brands including flood damage, rebuilt, junk, lemon, and mileage tampering.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: <FaTools />,
    title: "Warranty Details",
    description:
      "Know which parts are still under warranty including drive train, powertrain, and factory coverage.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Safety Recalls",
    description:
      "Track recall history, risk levels, and actions needed for safety compliance from NHTSA & OEMs.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: <FaBalanceScale />,
    title: "Open Liens",
    description:
      "Detect active bank loans or unsettled financing with lender names and initiation dates.",
    color: "from-pink-400 to-pink-600",
  },
];

export default function ServiceCards() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white via-[#E3F0FA] to-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sky-600 text-2xl uppercase font-semibold tracking-wider">
          What We Offer
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Premium Vehicle History Services
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            className="relative group overflow-hidden rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white/40 backdrop-blur-xl hover:scale-[1.02]"
          >
            <div
              className={`absolute inset-0 z-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
            />
            <div className="relative z-10 flex flex-col items-start gap-4 p-6 min-h-[300px]">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white text-2xl shadow-md group-hover:rotate-6 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
