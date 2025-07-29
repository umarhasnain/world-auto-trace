"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/assets/imgs/logo-new.png"
              alt="World Auto Trace Logo"
              width={80}
              height={70}
            />
            <span className="text-2xl font-light text-white">
              World<span className="text-red-700">Auto</span>Trace 
            </span>
          </div>
          <p className="text-sm mb-6">
            WorldAutoTrace is an Approved AutoCheck Data Provider.
            <br />
            All logos, trademarks and registered trademarks presented are the
            property of their respective owners.
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/imgs/new-site.png"
              alt="AutoCheck Logo"
              width={100}
              height={30}
            />
            <Image
              src="/assets/imgs/1c.webp"
              alt="NMVTIS Logo"
              width={80}
              height={30}
            />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-white transition">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-3 mb-6">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="refund-policy" className="hover:text-white transition">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="text-blue-500 text-xl" />
            <div>
              <p className="text-sm">To Send Mail</p>
              <Link
                href="mailto:info@worldautotrace.com"
                className="text-sm text-white hover:text-blue-400 transition"
              >
                info@worldautotrace.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        All Rights Reserved by{" "}
        <Link
          href="#"
          className="text-white hover:underline transition"
        >
          World<span className="text-red-700">Auto</span>Trace 
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
