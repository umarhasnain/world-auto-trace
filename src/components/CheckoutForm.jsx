// 'use client'
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const CheckoutForm = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
    
//     <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-10 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Billing + Vehicle Form */}
//         <div
//           className="lg:col-span-2 bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8"
//           data-aos="fade-up"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Details</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <input className="form-input" placeholder="Full Name *" required />
//             <input className="form-input" placeholder="Phone *" required />
//             <input className="form-input" placeholder="Email *" required />
//             <input className="form-input" placeholder="Address *" required />
//             <select className="form-input" required>
//               <option value="">Country *</option>
//               <option value="USA">USA</option>
//               <option value="Pakistan">Pakistan</option>
//             </select>
//             <input className="form-input" placeholder="Zip Code *" required />
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Vehicle Information</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input className="form-input" placeholder="Vehicle Name *" required />
//             <input className="form-input" placeholder="VIN Number *" required />
//             <input className="form-input" placeholder="Mileage *" required />
//             <input className="form-input" placeholder="Number Plate *" required />
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Information</h2>
//           <textarea
//             className="form-input h-24"
//             placeholder="Order notes (optional)"
//           ></textarea>

//           <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//             Confirm & Checkout
//           </button>
//         </div>

//         {/* Order Summary */}
//         <div
//           className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-6 h-fit"
//           data-aos="fade-left"
//         >
//           <h3 className="text-xl font-bold text-gray-900 mb-4">Your Order</h3>
//           <div className="flex justify-between text-gray-700 mb-2">
//             <span>Package :</span>
//             <span className="font-medium">Standard</span>
//           </div>
//           <div className="flex justify-between text-gray-700 mb-2">
//             <span>Category :</span>
//             <span className="font-medium">Boat</span>
//           </div>
//           <hr className="my-3" />
//           <div className="flex justify-between text-lg font-bold text-gray-800">
//             <span>Total</span>
//             <span>$60</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CheckoutForm;

// // Tailwind Custom Input Style
// // Paste this in global CSS or include utility classes
// // .form-input {
// //   @apply w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-sm;
// // }


'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePlan } from '@/context/PlanContext';
import { useRouter } from 'next/navigation';

const CheckoutForm = () => {
  const { selectedPlan } = usePlan();
  const router = useRouter(); // 👈 Add this

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    zip: '',
    vehicleName: '',
    vin: '',
    mileage: '',
    numberPlate: '',
    notes: '',
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      billingInfo: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        country: formData.country,
        zip: formData.zip,
      },
      vehicleInfo: {
        vehicleName: formData.vehicleName,
        vin: formData.vin,
        mileage: formData.mileage,
        numberPlate: formData.numberPlate,
      },
      notes: formData.notes,
      selectedPlan,
    };

    alert("✅ Order Submitted")
    console.log('✅ Order Submitted:', orderData);

    // ✅ Redirect to thank-you page after submit
    router.push('/thank-you');
  };

  if (!selectedPlan) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>No plan selected. Please go back and select a package.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {/* Billing + Vehicle Form */}
        <div
          className="lg:col-span-2 bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="form-input" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} />
            <input className="form-input" name="phone" placeholder="Phone *" required value={formData.phone} onChange={handleChange} />
            <input className="form-input" name="email" placeholder="Email *" required value={formData.email} onChange={handleChange} />
            <input className="form-input" name="address" placeholder="Address *" required value={formData.address} onChange={handleChange} />
            <select className="form-input" name="country" required value={formData.country} onChange={handleChange}>
              <option value="">Country *</option>
              <option value="USA">USA</option>
              <option value="Pakistan">Pakistan</option>
              <option value="UK">UK</option>
            </select>
            <input className="form-input" name="zip" placeholder="Zip Code *" required value={formData.zip} onChange={handleChange} />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Vehicle Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="form-input" name="vehicleName" placeholder="Vehicle Name *" required value={formData.vehicleName} onChange={handleChange} />
            <input className="form-input" name="vin" placeholder="VIN Number *" required value={formData.vin} onChange={handleChange} />
            <input className="form-input" name="mileage" placeholder="Mileage *" required value={formData.mileage} onChange={handleChange} />
            <input className="form-input" name="numberPlate" placeholder="Number Plate *" required value={formData.numberPlate} onChange={handleChange} />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Information</h2>
          <textarea
            className="form-input h-24"
            name="notes"
            placeholder="Order notes (optional)"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Confirm & Checkout
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-6 h-fit" data-aos="fade-left">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Order</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Package :</span>
            <span className="font-medium">{selectedPlan.title}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Category :</span>
            <span className="font-medium">Vehicle</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>{selectedPlan.price}</span>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
