'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-500 via-white to-red-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let’s Talk</h2>
          <p className="text-gray-600 text-lg mb-6">
            Got a question, suggestion, or just want to say hello? <br />
            Our team is always here to help you. <br />Fill out the form and we’ll get back to you shortly.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>📧 support@yourdomain.com</li>
            <li>📞 +92 123 4567890</li>
            <li>📍 Karachi, Pakistan</li>
          </ul>
        </div>

        {/* Right Section */}
        <div
          className="bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-8"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h3>

          <form
            action="https://formsubmit.co/youremail@example.com" // Replace with your email
            method="POST"
            className="space-y-5"
          >
            <div>
              <label className="block font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jackson Mile"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all font-semibold"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
