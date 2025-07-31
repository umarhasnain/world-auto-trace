'use client'
import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CustomPaymentForm from "@/components/CustomPaymentForm";
import PaymentForm from "@/components/PaymentForm";
import CustomFormPage from "@/components/CustomFormPage";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center">
        <div className="z-10 px-4">
          <p className="text-red-700 text-sm md:text-base font-semibold mb-2">
            Checkout
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Processed Checkout
          </h2>
        </div>
      </section>

      {/* Checkout Form */}
      <div className="max-w-3xl mx-auto py-10 px-4">
     <CustomFormPage/>
      </div>
    </div>
  );
}


// "use client";
// import { useRouter } from "next/navigation";
// import { usePlan } from "@/context/PlanContext";
// import { useState } from "react";

// export default function CustomFormPage() {
//   const { setPaymentData } = usePlan();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     cardNumber: "",
//     expMonth: "",
//     expYear: "",
//     cvc: "",
//     amount: "",
//     planName: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPaymentData(form);
//     router.push("/stripe-payment");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white p-6 rounded shadow-lg space-y-4"
//     >
//       <input
//         type="text"
//         placeholder="Cardholder Name"
//         className="border p-2 w-full rounded"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Card Number"
//         maxLength={16}
//         className="border p-2 w-full rounded"
//         value={form.cardNumber}
//         onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
//       />
//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="MM"
//           maxLength={2}
//           className="border p-2 w-full rounded"
//           value={form.expMonth}
//           onChange={(e) => setForm({ ...form, expMonth: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="YY"
//           maxLength={2}
//           className="border p-2 w-full rounded"
//           value={form.expYear}
//           onChange={(e) => setForm({ ...form, expYear: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="CVC"
//           maxLength={3}
//           className="border p-2 w-full rounded"
//           value={form.cvc}
//           onChange={(e) => setForm({ ...form, cvc: e.target.value })}
//         />
//       </div>
//       <input
//         type="number"
//         placeholder="Amount in USD"
//         className="border p-2 w-full rounded"
//         value={form.amount}
//         onChange={(e) => setForm({ ...form, amount: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Plan Name"
//         className="border p-2 w-full rounded"
//         value={form.planName}
//         onChange={(e) => setForm({ ...form, planName: e.target.value })}
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Continue to Payment
//       </button>
//     </form>
//   );
// }
