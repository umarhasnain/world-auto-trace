// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";

// const processSteps = [
//   {
//     id: 1,
//     title: "Search VIN",
//     icon: "/assets/icons/vin-search.png",
//     desc: "Enter the Vehicle Identification Number (VIN) or UK Registration Number (VRN) for a full check.",
//   },
//   {
//     id: 2,
//     title: "Choose Package",
//     icon: "/assets/icons/package.png",
//     desc: "Pick your plan, enter details and accept terms & conditions.",
//   },
//   {
//     id: 3,
//     title: "Purchase Report",
//     icon: "/assets/icons/report.png",
//     desc: "Make payment and instantly get redirected to your full report.",
//   },
//   {
//     id: 4,
//     title: "Verify Vehicle",
//     icon: "/assets/icons/verify.png",
//     desc: "Receive your verified report via email within minutes.",
//   },
// ];

// const testimonials = [
//   {
//     name: "Robart L",
//     message:
//       "I've used a few vehicle history report services before, but Vehicles Crafter is by far the best. Their reports are detailed, accurate, and delivered quickly. I especially loved how they included information about previous owners and service history.",
//     image: "/assets/avatars/avatar1.png",
//     trust: true,
//   },
// ];

// export default function ProcessAndTestimonial() {
//   return (
//     <section className="bg-gray-50">
//       {/* Working Process */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <p className="text-blue-500 font-semibold text-sm" data-aos="fade-up">Step-by-Step Guide</p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="100">
//             Our Working Process
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {processSteps.map((step, index) => (
//             <div
//               key={step.id}
//               className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
//               <div className="flex justify-center mb-4">
//                 <Image src={step.icon} alt={step.title} width={50} height={50} />
//               </div>
//               <h4 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h4>
//               <p className="text-sm text-gray-600">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Testimonial */}
//       <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
//         {/* Floating Avatars */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute w-full h-full -z-10">
//             {[...Array(6)].map((_, i) => (
//               <Image
//                 key={i}
//                 src={`/assets/avatars/avatar${i + 1}.png`}
//                 width={60}
//                 height={60}
//                 alt={`User ${i + 1}`}
//                 className={`absolute rounded-full opacity-30 animate-pulse z-0`} 
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Main Testimonial */}
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="max-w-3xl mx-auto text-center relative z-10"
//             data-aos="zoom-in"
//           >
//             <div className="flex justify-center mb-4">
//               <Image
//                 src={t.image}
//                 width={80}
//                 height={80}
//                 alt={t.name}
//                 className="rounded-full border-4 border-white shadow-lg"
//               />
//             </div>
//             {t.trust && (
//               <div className="flex justify-center items-center gap-2 text-green-500 mb-2">
//                 <FaCheckCircle />
//                 <span className="text-sm font-medium">Trusted Company</span>
//               </div>
//             )}
//             <p className="text-gray-700 text-lg font-medium leading-relaxed">
//               "{t.message}"
//             </p>
//             <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
//           </div>
//         ))}

//         {/* Bottom Trustpilot */}
//         <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="300">
//           <p className="text-sm text-gray-600">
//             <span className="font-semibold text-green-600">Excellent!</span>{" "}
//             <span className="text-green-500">★★★★★</span> 5.0 Rating based on {" "}
//             <a
//               href="#"
//               className="text-blue-500 underline hover:text-blue-600"
//             >
//               245,354 reviews
//             </a>{" "}
//             — Trustpilot
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// components/TestimonialsSection.jsx
"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Robart L",
    text: `I've used a few vehicle history report services before, but Vehicles Crafter is by far the best. Their reports are detailed, accurate, and delivered quickly. I especially loved how they included information about previous owners and service history. It made me feel confident in my purchase. Great job, Vehicles Crafter!`,
    avatar: "/assets/imgs/home3-testi-01.png",
  },
  {
    name: "Sarah K",
    text: `The process was smooth and seamless. The vehicle report was extremely detailed, and customer support was fantastic. Highly recommend!`,
    avatar: "/assets/imgs/home3-testi-02.png",
  },
  {
    name: "Daniel R",
    text: `Fast, reliable, and very professional. I got all the information I needed in just minutes. This service saved me from a bad deal.`,
    avatar: "/assets/imgs/home3-testi-03.png",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Real feedback from verified customers. Trusted by thousands of happy car buyers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center text-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-700 text-base md:text-lg mb-4">{t.text}</p>
                <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
                  {Array(5).fill().map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.854L19.335 24 12 19.897 4.665 24 6 15.277 0 9.423l8.332-1.268z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-800 font-semibold">{t.name}</span>
                <span className="text-xs text-gray-500">Verified Buyer</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="text-center mt-8 text-sm text-gray-500"
        data-aos="fade-in"
        data-aos-delay="400"
      >
        Excellent!{" "}
        <span className="text-green-500 font-semibold">5.0 Rating</span> based on{" "}
        <strong className="font-semibold">245,354 reviews</strong> — Trustpilot
      </div>
    </div>
  );
}
