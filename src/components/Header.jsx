// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`fixed w-full top-0 z-50 transition-all border-b-1 border-gray-500 p-3 duration-300 ${
//           scrolled ? "bg-black text-white shadow" : "text-white"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
//           {/* Left Menu */}
//           <div className="hidden md:flex gap-8  text-md">
//             <Link href="/">Home</Link>
//             <Link href="#about">About</Link>
//             <Link href="#services">Services</Link>
//           </div>

//           {/* Logo */}
//           <Link href="/" className="flex items-center justify-center">
//             <Image
//               src="/assets/imgs/car-logo.png" // <- Place your image in /public folder with this name
//               alt="Vehicles Crafter Logo"
//               width={100}
//               height={20}
//               priority
//             />
//           </Link>

//           {/* Right Menu */}
//           <div className="hidden md:flex gap-8 font-semibold text-md">
//             <Link href="/packages">Packages</Link>
//             <Link href="#contact">Contact Us</Link>
//           </div>

//           {/* Hamburger Button */}
//           <button
//             onClick={() => setMobileMenu(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="fixed top-0 left-0 w-72 h-full bg-white z-[9999] p-6 shadow-lg transition-transform">
//           <div className="flex justify-between items-center mb-8">
//             <Image src="/assets/imgs/logo-mobile.png" alt="Logo" width={130} height={30} />
//             <button onClick={() => setMobileMenu(false)}>
//               <X size={28} />
//             </button>
//           </div>

//           <nav className="flex flex-col gap-6 font-semibold">
//             <Link href="/">HOME</Link>
//             <Link href="#about">ABOUT</Link>
//             <Link href="#services">SERVICES</Link>
//             <Link href="/packages">PACKAGES</Link>
//             <Link href="#contact">CONTACT US</Link>
//           </nav>

//           <div className="mt-10 flex">
//             <Image
//               src="/assets/imgs/email.svg"
//               alt="Email"
//               width={28}
//               height={28}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 py-1 px-6 transition-all duration-300 ${
          scrolled ? "bg-white shadow text-gray-800" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-0 flex justify-between items-center">
          {/* Logo + Website Name */}
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/assets/imgs/logo-new.png" // your logo path
              alt="ProveNcheck Logo"
              width={100}
              height={100}
              priority
            />
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              World<span className="text-red-600">Auto</span>Trace
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium items-center">
            <Link href="/" className="hover:text-red-700 transition hover:border-b-red-700 hover:border-b-2">
              Home
            </Link>
            <Link href="/about" className="hover:text-red-700 transition hover:border-b-red-700 hover:border-b-2 ">
              About
            </Link>
            <Link href="/services" className="hover:text-red-700 transition hover:border-b-red-700 hover:border-b-2 ">
              Services
            </Link>
            <Link href="/packages" className="hover:text-red-700 transition hover:border-b-red-700 hover:border-b-2 ">
              Packages
            </Link>
            <Link href="/contact-us" className="hover:text-red-700 transition hover:border-b-red-700 hover:border-b-2 ">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenu(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex justify-end">
          <div className="w-72 h-full bg-white p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/imgs/car-logo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
                <span className="text-lg font-bold text-gray-800">
                  Prove<span className="text-blue-500">N</span>check
                </span>
              </div>
              <button
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
              >
                <CloseIcon size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 font-medium text-gray-800">
              <Link href="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenu(false)}>
                About
              </Link>
              <Link href="/services" onClick={() => setMobileMenu(false)}>
                Services
              </Link>
              <Link href="/packages" onClick={() => setMobileMenu(false)}>
                Packages
              </Link>
              <Link href="/contact" onClick={() => setMobileMenu(false)}>
                Contact Us
              </Link>
            </nav>
            <div className="mt-auto pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} ProveNcheck</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
