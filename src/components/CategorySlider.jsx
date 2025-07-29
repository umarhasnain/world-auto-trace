"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const categories = [
  { name: "ATV", image: "/assets/imgs/imgi_11_atv.png" },
  { name: "Bike", image: "/assets/imgs/imgi_12_bike.png" },
  { name: "Boat", image: "/assets/imgs/imgi_13_boat.png" },
  { name: "Cars", image: "/assets/imgs/imgi_14_car.png" },
  { name: "Karvaan", image: "/assets/imgs/imgi_15_karvaan.png" },
  { name: "Truck", image: "/assets/imgs/imgi_17_truck.png" },
];

const CategorySlider = () => {
  const sliderRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // AOS Init
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Explore Vehicle <span className="text-[#36719E]">Categories</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Browse the best categories and discover your perfect ride.
          </p>
        </div>

        {/* Arrows */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar py-4  px-1"
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="min-w-[200px] w-52 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-32 flex justify-center items-center relative rounded-t-xl overflow-hidden">
                 <Link href={`/category/${cat.name}`}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    height={50}
                    width={100}
                   
                    className="object-cover"
                  />
                 </Link>
                </div>
                <div className="p-3 text-center font-semibold text-gray-700">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
