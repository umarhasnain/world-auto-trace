// 'use client'
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import VehicleReportPlans from "@/components/VehicleReportPlans";

// const Page = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <main className="bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center px-4">
//         <div className="z-10">
//           <p className="text-[#6CA9D7] text-sm md:text-base font-semibold mb-2">
//             Packages
//           </p>
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Select The Categories
//           </h1>
//         </div>
//       </section>

//       {/* Why Section */}
//       <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div data-aos="fade-right">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Why You Need a Vehicle Report
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Immediate and comprehensive vehicle reports help you make
//               informed decisions whether buying, selling, or maintaining a
//               vehicle. With real-time NMVTIS data, you get reliable and
//               up-to-date insights on ownership, accidents, maintenance, theft,
//               and more — ensuring peace of mind and safety.
//             </p>
//           </div>
//           <div data-aos="fade-left">
//             <img
//               src="https://images.unsplash.com/photo-1519821172141-b5d8b6611a2e"
//               alt="Vehicle Report"
//               className="rounded-xl shadow-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Plans Section */}
//       <section className="px-4 md:px-8 py-10">
//         <VehicleReportPlans />
//       </section>
//     </main>
//   );
// };

// export default Page;


'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VehicleReportPlans from '@/components/VehicleReportPlans';

const categories = [
  {
    name: 'car',
    image: '/assets/imgs/car.png', // Replace with your image URL
  },
  {
    name: 'bike',
    image: '/assets/imgs/bike.jpg',
  },
  {
    name: 'truck',
    image: '/assets/imgs/truck.png',
  },
  {
    name: 'boat',
    image: '/assets/imgs/boat.png',
  },
  {
    name: 'ATV',
    image: '/assets/imgs/atv.png',
  },
  {
    name: 'karvaan',
    image: '/assets/imgs/karvaan.png',
  },
  {
    name: 'trailer.png',
    image: '/assets/imgs/trailer.png',
  },
];

export default function Page({ params }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { id } = params;

  const currentid = categories.find(
    (item) => item.name.toLowerCase() === id?.toLowerCase()
  );

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center px-4">
        <div className="z-10">
          <p className="text-[#6CA9D7] text-sm md:text-base font-semibold mb-2">
            Packages
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white capitalize">
            {id} Report
          </h1>
        </div>
      </section>

      {/* Why Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why You Need a {id} Report
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Immediate and comprehensive {id} reports help you make
              informed decisions whether buying, selling, or maintaining a
              vehicle. With real-time NMVTIS data, you get reliable and
              up-to-date insights on ownership, accidents, maintenance, theft,
              and more — ensuring peace of mind and safety.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={currentid?.image || '/placeholder.jpg'}
              alt={`${id} image`}
              className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="px-4 md:px-8 py-10">
        <VehicleReportPlans />
      </section>
    </main>
  );
}
