// "use client";
// import { usePlan } from "@/context/PlanContext";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// function StripeForm() {
//   const { paymentData } = usePlan();
//   const stripe = useStripe();
//   const elements = useElements();

// console.log("data====>", paymentData);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//       billing_details: { name: paymentData.name },
//     });

//     if (error) {
//       alert(error.message);
//     } else {
//       console.log("✅ Payment Successful:", paymentMethod);
//       alert(`Paid $${paymentData.amount} successfully in test mode!`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white rounded shadow">
//       <p className="text-lg font-bold">Paying: ${paymentData.amount}</p>
//       <CardElement className="border p-2 rounded" />
//       <button
//         type="submit"
//         className="bg-green-500 text-white px-4 py-2 rounded w-full"
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// }

// export default function StripePaymentPage() {
//   return (
//     <Elements stripe={stripePromise}>
//       <StripeForm />
//     </Elements>
//   );
// }



// "use client";
// import { usePlan } from "@/context/PlanContext";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, useStripe } from "@stripe/react-stripe-js";
// import { useState, useEffect } from "react";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// function CustomStripeForm() {
//   const { paymentData } = usePlan();
//   const stripe = useStripe();
//   const [form, setForm] = useState({
//     name: "",
//     cardNumber: "",
//     expMonth: "",
//     expYear: "",
//     cvc: "",
//     amount: "",
//   });

//   // Autofill from context
//   useEffect(() => {
//     if (paymentData) {
//       setForm(paymentData);
//     }
//   }, [paymentData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe) return;

//     // Create token with manual card details
//     const { error, token } = await stripe.createToken({
//       card: {
//         number: form.cardNumber,
//         exp_month: form.expMonth,
//         exp_year: form.expYear,
//         cvc: form.cvc,
//       },
//       name: form.name,
//     });

//     if (error) {
//       alert(error.message);
//     } else {
//       console.log("✅ Token Created:", token);
//       alert(`Paid $${form.amount} successfully in test mode!`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white rounded shadow">
//       <input
//       re
//         type="text"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//         className="border p-2 w-full rounded"
//       />
//       <input
//         type="text"
//         readOnly
//         value={form.cardNumber}
//         onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
//         className="border p-2 w-full rounded"
//       />
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={form.expMonth}
//           onChange={(e) => setForm({ ...form, expMonth: e.target.value })}
//           className="border p-2 w-full rounded"
//         />
//         <input
//         readOnly
//           type="text"
//           value={form.expYear}
//           onChange={(e) => setForm({ ...form, expYear: e.target.value })}
//           className="border p-2 w-full rounded"
//         />
//         <input
//         readOnly
//           type="text"
//           value={form.cvc}
//           onChange={(e) => setForm({ ...form, cvc: e.target.value })}
//           className="border p-2 w-full rounded"
//         />
//       </div>
//       <p className="font-bold">Paying: ${form.amount}</p>
//       <button
//         type="submit"
//         className="bg-green-500 text-white px-4 py-2 rounded w-full"
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// }

// export default function StripePaymentPage() {
//   return (
//     <Elements stripe={stripePromise}>
//       <CustomStripeForm />
//     </Elements>
//   );
// }



import StripePaymentPage from '@/components/StripePayment'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center">
        <div className="z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Payment Confirmation Form
          </h2>
        </div>
      </section>

      <div className='py-32 bg-slate-50'>
        <StripePaymentPage />
      </div>
    </div>
  )
}

export default page



// "use client";
// import { usePlan } from "@/context/PlanContext";
// import { useState, useEffect } from "react";

// export default function CustomStripeForm() {
//   const { paymentData } = usePlan();
//   const [form, setForm] = useState(paymentData || {});

//   useEffect(() => {
//     if (paymentData) {
//       setForm(paymentData);
//     }
//   }, [paymentData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/create-token", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         number: form.cardNumber,
//         exp_month: form.expMonth,
//         exp_year: form.expYear,
//         cvc: form.cvc,
//         amount: form.amount,
//         name: form.name
//       })
//     });

//     const data = await res.json();
//     if (data.success) {
//       alert(`✅ Payment of $${form.amount} successful in test mode!`);
//       console.log("Stripe Charge Response:", data.charge);
//     } else {
//       alert(`❌ Payment failed: ${data.error}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white rounded shadow">
//       <h1 className="text-center text-2xl font-bold">{form.planName}</h1>
//       <p className="font-bold">Paying: ${form.amount}</p>
//       <input value={form.name} readOnly className="border p-2 w-full rounded" />
//       <input value={form.cardNumber} readOnly className="border p-2 w-full rounded" />
//       <div className="flex gap-2">
//         <input value={form.expMonth} readOnly className="border p-2 w-full rounded" />
//         <input value={form.expYear} readOnly className="border p-2 w-full rounded" />
//         <input value={form.cvc} readOnly className="border p-2 w-full rounded" />
//       </div>
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
//         Pay Now
//       </button>
//     </form>
//   );
// }
