'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const faqs = [
  {
    question: 'How Extensive Are Your VIN Reports?',
    answer:
      'Our reports encompass crucial details such as Brand Records, Junk/Salvage/Total Loss status, Odometer Readings, Title Records, Prior Theft Records, and more. We provide comprehensive information to support your informed decision-making process!',
  },
  {
    question: 'Is Your VIN Lookup Service Accurate and Reliable?',
    answer:
      'Absolutely, our VIN Lookup service is highly trustworthy and precise. We derive our data from well-established public and private databases, ensuring the highest levels of accuracy and reliability in our service. We are also an authorized source for the American Association of Motor Vehicle Administrator NMVTIS database, reinforcing the accuracy of our service.',
  },
  {
    question: 'Do You Cover All Vehicle Makes?',
    answer:
      'Our VIN & VRM checker caters to all major makes and models of automobiles registered in the United States & Canada & United Kingdom. Conduct a VIN & VRM search or use the License Plate to look up the vehicle.',
  },
  {
    question: 'Is The Verified By The Auto Checks By Experian',
    answer:
      'Yes, all the data we provide through our vehicle hisory reports is verified by the Auto Checks By Experian. We ensure the information is accurate, up-to-date, and reliable, giving you confidence in the validity of your vehicles details.',
  },
  {
    question: 'What If I Can’t Find Any Information?',
    answer:
      'Our proficient customer service team is available 24/7 to assist you in locating the information you need. Contact them at support@wheelsaudit.com. If, for any reason, our search experts cannot find your information, we offer a refund!',
  },
  {
    question: 'How Can I Check The Details Of A Car UK?',
    answer:
      'To check the details of a car in the UK, you can use WheelsAudit Vehicle Report service. This service allows you to check a vehicles details, including the make, model, color, body type, engine size, and MOT history. You will need the cars registration number to use the service.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
      {/* Left Image */}
      <div className="w-full h-full">
        <Image
          src="/assets/imgs/home-faqs.webp" 
          width={300}
          height={300}
          alt="FAQ Illustration"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          FAQ’s & Latest Answer
        </h2>
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition-all duration-200"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}