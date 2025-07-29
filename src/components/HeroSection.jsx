// // import Image from "next/image";

// // const HeroSection = () => {
// //     return (
// //         <section className="relative w-full h-screen overflow-hidden">
// //             {/* Background Video */}
// //             <video
// //                 autoPlay
// //                 loop
// //                 muted
// //                 playsInline
// //                 className="absolute top-0 left-0 w-full h-full object-cover-z-10 opacity-25"
// //             >
// //                 <source src="/assets/imgs/car-video.mp4" type="video/mp4" />
// //                 Your browser does not support the video tag.
// //             </video>

// //             {/* Overlay */}
// //             <div className="absolute inset-0 bg-black bg-opacity-60 -z-10" />

// //             {/* Content */}
// //             <div className="absolute top-[39%] text-white left-1/2 transform -translate-x-1/2 max-w-[970px] w-full text-center z-[1]">
// //                 <p className="text-sky-400 text-lg font-semibold">
// //                     Comprehensive Vehicle Reports
// //                 </p>
// //                 <h1 className=" text-white text-3xl md:text-5xl md:w-full font-bold leading-tight my-4">
// //                     Get the perfect report or full vehicle history at Vehicles Crafter!
// //                 </h1>
// //                 <p className="mb-6 text-lg ">
// //                     Dealerships offer new and used cars, trucks, bikes & boats with full
// //                     history reports or key details.
// //                 </p>


// //                 {/* Trustpilot Badge */}
// //                 <div className="mt-6 text-sm flex justify-center items-center gap-12 flex-wrap">
// //                     <button className="bg-sky-400 hover:bg-sky-500 transition px-6 py-3 rounded font-semibold">
// //                         Find Your Report
// //                     </button>
// //                     <div className="flex flex-col">
// //                         <div className="flex gap-5 flex-col justify-center items-center text-center">
// //                            <div className="flex gap-5">
// //                              <Image
// //                                 src="/assets/imgs/trustpilot-logo2.png"
// //                                 alt="Trustpilot"
// //                                 width={100}
// //                                 height={20}
// //                             />
// //                             <Image
// //                                 src="/assets/imgs/trustpilot-star.png"
// //                                 alt="Trustpilot"
// //                                 width={100}
// //                                 height={20}
// //                             />
// //                            </div>
// //                           <p>Trust Rating <strong>4.2</strong> | 1268 Reviews</p>
                        
// //                         </div>
// //                         <div>
                            
// //                         </div>

// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default HeroSection;

// 'use client'

// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       {/* <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
//       >
//         <source src="/assets/imgs/car-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}
//       <Image src='/assets/imgs/bg-image.jpg'width={500} height={500} className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"/>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-[-1]" />

//       {/* Content */}
//       <div className="text-center px-4 max-w-3xl">
//         <p
//           className="text-[#36719E] text-xl font-semibold mb-2 animate-fadeInUp"
//           style={{ animationDelay: "0.3s" }}
//         >
//           Comprehensive Vehicle History Reports
//         </p>
//         <h1
//           className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fadeInUp"
//           style={{ animationDelay: "0.5s" }}
//         >
//           Drive Confidently with Trusted Vehicle Data
//         </h1>
//         <p
//           className="text-gray-200 text-lg mb-6 animate-fadeInUp"
//           style={{ animationDelay: "0.7s" }}
//         >
//           Discover hidden details, verify ownership, and avoid costly surprises.
//           Get your full report in seconds.
//         </p>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: "0.9s" }}>
//           <button className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded font-semibold text-white shadow-md">
//             Find Your Vehicle Report
//           </button>
//           <div className="flex flex-col items-center sm:items-start">
//             <div className="flex gap-3 items-center">
//               <Image
//                 src="/assets/imgs/trustpilot-logo2.png"
//                 alt="Trustpilot"
//                 width={90}
//                 height={20}
//               />
//               <Image
//                 src="/assets/imgs/trustpilot-star.png"
//                 alt="Trustpilot Stars"
//                 width={90}
//                 height={20}
//               />
//             </div>
//             <p className="text-sm text-gray-300 mt-1">
//               Trust Rating <strong>4.2</strong> | 1,268 Reviews
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Simple fade-in animation */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;


// 'use client'

// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image using Next.js fill */}
//       <Image
//         src="/assets/imgs/background.jpg"
//         alt="Background"
//         fill
//         priority
//         quality={100}
//         className="object-cover z-[-2]"
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-[-1]" />

//       {/* Content */}
//       <div className="text-center px-4 max-w-3xl">
//         <p
//           className="text-[#36719E] text-xl font-semibold mb-2 animate-fadeInUp"
//           style={{ animationDelay: "0.3s" }}
//         >
//           Comprehensive Vehicle History Reports
//         </p>
//         <h1
//           className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fadeInUp"
//           style={{ animationDelay: "0.5s" }}
//         >
//           Drive Confidently with Trusted Vehicle Data
//         </h1>
//         <p
//           className="text-gray-200 text-lg mb-6 animate-fadeInUp"
//           style={{ animationDelay: "0.7s" }}
//         >
//           Discover hidden details, verify ownership, and avoid costly surprises.
//           Get your full report in seconds.
//         </p>

//         {/* CTA */}
//         <div
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
//           style={{ animationDelay: "0.9s" }}
//         >
//           <button className="bg-sky-600 hover:bg-sky-700 transition px-6 py-3 rounded font-semibold text-white shadow-md">
//             Find Your Vehicle Report
//           </button>
//           <div className="flex flex-col items-center sm:items-start">
//             <div className="flex gap-3 items-center">
//               <Image
//                 src="/assets/imgs/trustpilot-logo2.png"
//                 alt="Trustpilot"
//                 width={90}
//                 height={20}
//               />
//               <Image
//                 src="/assets/imgs/trustpilot-star.png"
//                 alt="Trustpilot Stars"
//                 width={90}
//                 height={20}
//               />
//             </div>
//             <p className="text-sm text-gray-300 mt-1">
//               Trust Rating <strong>4.2</strong> | 1,268 Reviews
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Simple fade-in animation */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;


'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 md:px-16 py-16 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/imgs/background.jpg"
          alt="Car Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Trusted <span className="text-red-600">Vehicle Inspection</span><br />
            By <span className="mt-12 text-white  px-2 rounded">World<span className='text-red-700'>Auto</span>Trace</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Drive with confidence. Get accurate, affordable & expert Vehicle  inspection services anytime, anywhere.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-white font-semibold text-lg shadow-lg"
          >
            Get Inspection Now
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <Image
            src="/assets/imgs/online-insp.jpg"
            alt="Car Inspection"
            width={400}
            height={300}
            className="rounded-xl pt-12 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
