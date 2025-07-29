"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
  {
    id: 1,
    title: "Search VIN",
    icon: "/assets/imgs/icon-05.svg",
    desc: "Enter the Vehicle Identification Number (VIN) or UK Registration Number (VRN) for a full check.",
  },
  {
    id: 2,
    title: "Choose Package",
    icon: "/assets/imgs/icon-06.svg",
    desc: "Pick your plan, enter details, and accept terms & conditions.",
  },
  {
    id: 3,
    title: "Purchase Report",
    icon: "/assets/imgs/icon-07.svg",
    desc: "Make payment and instantly get redirected to your full report.",
  },
  {
    id: 4,
    title: "Verify Vehicle",
    icon: "/assets/imgs/icon-08.svg",
    desc: "Receive your verified report via email within minutes.",
  },
];

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-blue-600 font-semibold uppercase tracking-wider text-xs sm:text-sm"
            data-aos="fade-up"
          >
            Step-by-Step Guide
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Working Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shadow-md">
                {step.id}
              </div>
              <div className="mb-4 mt-4">
                <Image src={step.icon} alt={step.title} width={48} height={48} />
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
