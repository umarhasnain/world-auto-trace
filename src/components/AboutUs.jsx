// "use client";

// import Image from "next/image";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const AboutUs = ({data}) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//   }, []);

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Left Side - Image */}
//           <div
//             className="relative w-full md:w-1/2 h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg"
//             data-aos="fade-right"
//           >
//             <Image
//               src="/assets/imgs/car-person.webp"
//               alt="About Vehicles Crafter"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Right Side - Content */}
//           <div
//             className="w-full md:w-1/2"
//             data-aos="fade-left"
//           >
//             <h3 className="text-[#36719E] font-semibold text-lg mb-2">About Us</h3>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//               Know More
//             </h2>
//             <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
//               Founded by automotive industry veterans with over <strong>70+ years</strong> of combined
//               experience, <strong>WorldAutoTrace</strong> is committed to delivering unparalleled vehicle
//               history data solutions.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
//               Since 2009, we have been an authorized <strong>NMVTIS Consumer Access Provider</strong>,
//               offering real-time data that includes DMV title info, salvage auction data, and total loss records.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
//               With direct access to <strong>Auto Checks by Experian</strong> and over <strong>2000+ vehicle records</strong>,
//               we ensure unmatched accuracy, reliability, and value.
//             </p>

//             <button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md">
//               Read More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const AboutUs = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const hasData = !!data && data.trim() !== "";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div
            className="relative w-full md:w-1/2 h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-right"
          >
            {hasData ? (
              <Image
                src="/assets/imgs/imag2.jpg" // ✅ Changed image
                alt="About Vehicles Crafter"
                fill
                className="object-cover"
              />
            ) : (
              <Image
                src="/assets/imgs/car-person.webp" // ✅ Changed image
                alt="About Vehicles Crafter"
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            {/* <h3 className="text-red-700 font-semibold text-lg mb-2">
              About Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Know More
            </h2> */}

            <>
              <p className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed">
                At WorldAutoTrace, we believe that every vehicle tells a
                story — and we help you uncover it.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed">
                We are a trusted platform dedicated to providing accurate,
                comprehensive, and instant vehicle history reports. Whether
                you're buying a used car or just want to verify the history of
                your current vehicle, our detailed reports offer complete peace
                of mind.
              </p>

              <p className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed">
               <strong> 🚗 What We Offer:</strong>
                <ul>
                  <li> Verified accident & damage history</li>
                  <li>Ownership & registration details</li>
                  <li>Stolen vehicle checks</li>
                  <li>Insurance & salvage data</li>
                  <li>Mileage verification</li>
                  <li>And more…</li>
                </ul>
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed">
                With cutting-edge data sources and real-time verification
                systems, we ensure that you get the most reliable vehicle
                history available in seconds. Our mission is to empower every
                buyer and seller with transparent information to make smart,
                safe automotive decisions.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                We are proud to serve thousands of users who rely on us daily
                for honest, fast, and affordable car reports. <br />
                <span className="font-bold">Your trust is our fuel.</span>
              </p>
            </>

            {/* Read More Button - Only when no data */}
            {!hasData && (
              <Link href="/about">
                <button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md">
                  Read More
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
