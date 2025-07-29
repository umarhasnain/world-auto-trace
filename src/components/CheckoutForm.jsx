

// 'use client';
// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { usePlan } from '@/context/PlanContext';
// import { useRouter } from 'next/navigation';

// const CheckoutForm = () => {
//   const { selectedPlan } = usePlan();
//   const router = useRouter(); // 👈 Add this

//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     country: '',
//     zip: '',
//     vehicleName: '',
//     vin: '',
//     mileage: '',
//     numberPlate: '',
//     notes: '',
//   });

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const orderData = {
//       billingInfo: {
//         name: formData.name,
//         phone: formData.phone,
//         email: formData.email,
//         address: formData.address,
//         country: formData.country,
//         zip: formData.zip,
//       },
//       vehicleInfo: {
//         vehicleName: formData.vehicleName,
//         vin: formData.vin,
//         mileage: formData.mileage,
//         numberPlate: formData.numberPlate,
//       },
//       notes: formData.notes,
//       selectedPlan,
//     };

//     alert("✅ Order Submitted")
//     console.log('✅ Order Submitted:', orderData);

//     // ✅ Redirect to thank-you page after submit
//     router.push('/thank-you');
//   };

//   if (!selectedPlan) {
//     return (
//       <div className="text-center py-20 text-gray-600">
//         <p>No plan selected. Please go back and select a package.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-10 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10"
//       >
//         {/* Billing + Vehicle Form */}
//         <div
//           className="lg:col-span-2 bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8"
//           data-aos="fade-up"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Details</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <input className="form-input" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} />
//             <input className="form-input" name="phone" placeholder="Phone *" required value={formData.phone} onChange={handleChange} />
//             <input className="form-input" name="email" placeholder="Email *" required value={formData.email} onChange={handleChange} />
//             <input className="form-input" name="address" placeholder="Address *" required value={formData.address} onChange={handleChange} />
//             <select className="form-input" name="country" required value={formData.country} onChange={handleChange}>
//               <option value="">Country *</option>
//               <option value="USA">USA</option>
//               <option value="Pakistan">Pakistan</option>
//               <option value="UK">UK</option>
//             </select>
//             <input className="form-input" name="zip" placeholder="Zip Code *" required value={formData.zip} onChange={handleChange} />
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Vehicle Information</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input className="form-input" name="vehicleName" placeholder="Vehicle Name *" required value={formData.vehicleName} onChange={handleChange} />
//             <input className="form-input" name="vin" placeholder="VIN Number *" required value={formData.vin} onChange={handleChange} />
//             <input className="form-input" name="mileage" placeholder="Mileage *" required value={formData.mileage} onChange={handleChange} />
//             <input className="form-input" name="numberPlate" placeholder="Number Plate *" required value={formData.numberPlate} onChange={handleChange} />
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Additional Information</h2>
//           <textarea
//             className="form-input h-24"
//             name="notes"
//             placeholder="Order notes (optional)"
//             value={formData.notes}
//             onChange={handleChange}
//           ></textarea>

//           <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//             Confirm & Checkout
//           </button>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-6 h-fit" data-aos="fade-left">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">Your Order</h3>
//           <div className="flex justify-between text-gray-700 mb-2">
//             <span>Package :</span>
//             <span className="font-medium">{selectedPlan.title}</span>
//           </div>
//           <div className="flex justify-between text-gray-700 mb-2">
//             <span>Category :</span>
//             <span className="font-medium">Vehicle</span>
//           </div>
//           <hr className="my-3" />
//           <div className="flex justify-between text-lg font-bold text-gray-800">
//             <span>Total</span>
//             <span>{selectedPlan.price}</span>
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default CheckoutForm;
// CheckoutForm.jsx

// "use client";
// import { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useRouter } from "next/navigation";

// export default function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   // Plan load from localStorage
//   useEffect(() => {
//     const plan = JSON.parse(localStorage.getItem("selectedPlan"));
//     if (plan) setSelectedPlan(plan);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements || !selectedPlan) return;

//     setLoading(true);

//     // 1. Create Payment Intent in USD
//     const res = await fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: selectedPlan.price * 100, currency: "usd" }),
//     });
//     const { clientSecret } = await res.json();

//     // 2. Create Payment Method
//     const cardElement = elements.getElement(CardElement);
//     const { paymentMethod, error: pmError } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//       billing_details: { name, email },
//     });

//     if (pmError) {
//       alert(pmError.message);
//       setLoading(false);
//       return;
//     }

//     // 3. Confirm Payment
//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: paymentMethod.id,
//     });

//     if (confirmError) {
//       alert(confirmError.message);
//     } else {
//       // ✅ Save payment info
//       localStorage.setItem("paymentInfo", JSON.stringify({
//         paymentIntentId: paymentIntent.id,
//         status: paymentIntent.status,
//         amount: paymentIntent.amount / 100,
//         currency: paymentIntent.currency,
//         user: { name, email },
//         plan: selectedPlan,
//         card: {
//           brand: paymentMethod.card.brand,
//           last4: paymentMethod.card.last4
//         }
//       }));

//       router.push("/thank-you");
//     }

//     setLoading(false);
//   };

//   if (!selectedPlan) return <p className="p-4 text-center">No plan selected.</p>;

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
//       <h2 className="text-xl font-bold mb-4">Checkout - {selectedPlan.title}</h2>
//       <p className="mb-4 text-lg font-semibold">Amount: ${selectedPlan.price} USD</p>

//       <input
//         type="text"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="w-full p-2 border rounded"
//       />

//       <input
//         type="email"
//         placeholder="Email Address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="w-full p-2 border rounded"
//       />

//       <CardElement className="p-3 border rounded" />

//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 disabled:bg-gray-400"
//       >
//         {loading ? "Processing..." : `Pay $${selectedPlan.price} USD`}
//       </button>
//     </form>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements, CardNumberElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { usePlan } from "@/context/PlanContext"; // ✅ Context import

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const { selectedPlan, setSelectedPlan, setPaymentInfo } = usePlan(); // ✅ Context states

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Plan load from localStorage if refresh
  useEffect(() => {
    if (!selectedPlan) {
      const plan = JSON.parse(localStorage.getItem("selectedPlan"));
      if (plan) setSelectedPlan(plan);
    }
  }, [selectedPlan, setSelectedPlan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !selectedPlan) return;

    setLoading(true);

    try {
      // 1. Create Payment Intent in USD
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedPlan.price * 100, currency: "usd" }),
      });
      const { clientSecret } = await res.json();

      // 2. Create Payment Method
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod, error: pmError } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: { name, email },
      });

      if (pmError) throw new Error(pmError.message);

      // 3. Confirm Payment
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) throw new Error(confirmError.message);

      // ✅ Save payment info in Context
      const paymentData = {
        paymentIntentId: paymentIntent.id,
        status: paymentIntent.status,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        user: { name, email },
        plan: selectedPlan,
        card: {
          brand: paymentMethod.card.brand,
          CardNumberElement:CardNumberElement,
          last4: paymentMethod.card.last4
        }
      };

      setPaymentInfo(paymentData); // Context API
      localStorage.setItem("paymentInfo", JSON.stringify(paymentData)); // Optional: backup

      router.push("/thank-you");
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  if (!selectedPlan) {
    return <p className="p-4 text-center">No plan selected.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">Checkout - {selectedPlan.title}</h2>
      <p className="mb-4 text-lg font-semibold">Amount: ${selectedPlan.price} USD</p>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />

      <CardElement className="p-3 border rounded" />

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : `Pay $${selectedPlan.price} USD`}
      </button>
    </form>
  );
}
