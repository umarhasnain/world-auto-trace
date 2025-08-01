
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
      {/* Main Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md text-gray-800"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/imgs/logo-new.png"
              alt="ProveNcheck Logo"
              width={60}
              height={60}
              priority
              className="object-contain"
            />
            <span
              className={`text-lg sm:text-xl font-bold ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              World<span className="text-red-600">Auto</span>Trace
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-medium items-center">
            {["Home", "About", "Services", "Packages", "Contact Us"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-red-700 transition border-b-2 border-transparent hover:border-red-700"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenu(true)}
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            <MenuIcon style={{ fontSize: 28 }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex justify-end">
          <div className="w-72 sm:w-80 h-full bg-white p-6 flex flex-col">
            {/* Top Section */}
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenu(false)}
              >
                <Image
                  src="/assets/imgs/logo-new.png"
                  alt="ProveNcheck Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <span className="text-lg font-bold text-gray-800">
                  World<span className="text-red-600">Auto</span>Trace
                </span>
              </Link>
              <button
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
              >
                <CloseIcon style={{ fontSize: 28 }} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 font-medium text-gray-800">
              {["Home", "About", "Services", "Packages", "Contact Us"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setMobileMenu(false)}
                    className="hover:text-red-600"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()}   World<span className="text-red-600">Auto</span>Trace
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 

export default Header;
