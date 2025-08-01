
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
