"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { icon: "🚗", label: "Vehicle Reports", target: 660 },
  { icon: "🏷️", label: "Dealer Reviews", target: 1691300 },
  { icon: "😊", label: "Happy Customers", target: 646000 },
  { icon: "⭐", label: "Reseller", target: 32, suffix: "%" },
];

export default function VehicleReport() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16  flex flex-wrap justify-center gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg w-48 sm:w-56 flex flex-col items-center p-6 transition-transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-800">
              <CountUp
                end={stat.target}
                duration={2}
                separator=","
                suffix={stat.suffix ? stat.suffix : "+"}
              />
            </div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Trustpilot */}
      <div
        className="text-center text-gray-700 py-4 mb-8 px-4"
        data-aos="fade-in"
        data-aos-delay="600"
      >
        <span className="font-semibold text-gray-900">Excellent!</span> ★★★★★
        5.0 Rating based on{" "}
        <strong className="font-semibold">245,354 reviews</strong> — Trustpilot
      </div>

      {/* Banner Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-12 gap-8 md:gap-12">
        {/* Left Text Content */}
        <div
          className="max-w-xl text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Car is Best?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Confused about your vehicle’s history? Get a detailed report with
            complete insights, including past records, accident history,
            ownership details, and more. Make informed decisions with
            confidence!
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-5 rounded-lg transition"
          >
            Show Me Best Car Report
          </a>
        </div>

        {/* Right Image */}
        <div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-shrink-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Image
            src="/assets/imgs/think.png"
            width={500}
            height={500}
            alt="Thinking"
            className="object-contain drop-shadow-2xl rounded-xl w-full h-auto"
            priority
          />
        </div>
      </section>
    </div>
  );
}
