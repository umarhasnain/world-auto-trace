// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { usePlan } from "@/context/PlanContext";

// export default function CustomFormPage() {
//   const { setPaymentData, selectedPlan } = usePlan();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     cardNumber: "",
//     expMonth: "",
//     expYear: "",
//     cvc: "",
//     amount: "",
//   });

//   // Auto-fill amount from selected plan
//   useEffect(() => {
//     if (selectedPlan) {
//       setForm((prev) => ({ ...prev, amount: selectedPlan.price }));
//     }
//   }, [selectedPlan]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Final validation before submission
//     if (form.cardNumber.length !== 16) {
//       alert("Card number must be exactly 16 digits");
//       return;
//     }
//     if (form.expMonth.length !== 2 || +form.expMonth < 1 || +form.expMonth > 12) {
//       alert("Expiry month must be 01-12");
//       return;
//     }
//     if (form.expYear.length !== 2) {
//       alert("Expiry year must be 2 digits");
//       return;
//     }
//     if (form.cvc.length !== 3) {
//       alert("CVC must be exactly 3 digits");
//       return;
//     }

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
//         required
//       />
//       <input
//         type="number"
//         placeholder="Card Number (16 digits)"
//         className="border p-2 w-full rounded"
//         value={form.cardNumber}
//         onChange={(e) =>
//           setForm({ ...form, cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16) })
//         }
//         required
//       />
//       <div className="flex gap-2">
//         <input
//           type="number"
//           placeholder="MM"
//           className="border p-2 w-full rounded"
//           value={form.expMonth}
//           onChange={(e) =>
//             setForm({ ...form, expMonth: e.target.value.replace(/\D/g, "").slice(0, 2) })
//           }
//           required
//         />
//         <input
//           type="number"
//           placeholder="YY"
//           className="border p-2 w-full rounded"
//           value={form.expYear}
//           onChange={(e) =>
//             setForm({ ...form, expYear: e.target.value.replace(/\D/g, "").slice(0, 2) })
//           }
//           required
//         />
//         <input
//           type="number"
//           placeholder="CVC"
//           className="border p-2 w-full rounded"
//           value={form.cvc}
//           onChange={(e) =>
//             setForm({ ...form, cvc: e.target.value.replace(/\D/g, "").slice(0, 3) })
//           }
//           required
//         />
//       </div>
//       <input
//         type="number"
//         placeholder="Amount in USD"
//         className="border p-2 w-full rounded"
//         value={form.amount}
//         readOnly
//       />
//       <button
//         type="submit"
//         className="w-full bg-red-500 text-white py-2 rounded"
//       >
//         Continue to Payment
//       </button>
//     </form>
//   );
// }

//Working Code**************************************************

// Progresive form

// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { usePlan } from "@/context/PlanContext";
// import "../app/globals.css";

// export default function CustomFormPage() {
//   const { setPaymentData, selectedPlan } = usePlan();
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

//   const [step, setStep] = useState(1); // 🔹 Track current field step

//   useEffect(() => {
//     if (selectedPlan) {
//       setForm((prev) => ({
//         ...prev,
//         amount: selectedPlan.price,
//         planName: selectedPlan.title,
//       }));
//     }
//   }, [selectedPlan]);

//   const handleChange = (field, value, maxLength, nextStep) => {
//     const cleanValue = value.replace(/\D/g, "").slice(0, maxLength);
//     setForm((prev) => {
//       const updated = { ...prev, [field]: cleanValue };
//       console.log("Form Update:", updated);
//       return updated;
//     });

//     if (cleanValue.length === maxLength && nextStep) {
//       setStep(nextStep);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (form.cardNumber.length !== 16) {
//       alert("Card number must be exactly 16 digits");
//       return;
//     }
//     if (form.expMonth.length !== 2 || +form.expMonth < 1 || +form.expMonth > 12) {
//       alert("Expiry month must be 01-12");
//       return;
//     }
//     if (form.expYear.length !== 2) {
//       alert("Expiry year must be 2 digits");
//       return;
//     }
//     if (form.cvc.length !== 3) {
//       alert("CVC must be exactly 3 digits");
//       return;
//     }

//     console.log("✅ Final Submitted Data:", form);
//     setPaymentData(form);
//     router.push("/stripe-payment");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200"
//     >
//       <h1 className="text-center text-3xl font-bold text-gray-800">{form.planName}</h1>

//       {/* Cardholder Name */}
//       <input
//         type="text"
//         placeholder="Cardholder Name"
//         className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//         required
//       />

//       {/* Step 1: Card Number */}
//       {step >= 1 && (
//         <input
//           type="text"
//           placeholder="Card Number (16 digits)"
//           className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none no-spinner"
//           value={form.cardNumber}
//           onChange={(e) => handleChange("cardNumber", e.target.value, 16, 2)}
//           required
//         />
//       )}

//       {/* Step 2: Expiry Month */}
//       {step >= 2 && (
//         <input
//           type="text"
//           placeholder="Expiry Month (MM)"
//           className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none no-spinner"
//           value={form.expMonth}
//           onChange={(e) => handleChange("expMonth", e.target.value, 2, 3)}
//           required
//         />
//       )}

//       {/* Step 3: Expiry Year */}
//       {step >= 3 && (
//         <input
//           type="text"
//           placeholder="Expiry Year (YY)"
//           className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none no-spinner"
//           value={form.expYear}
//           onChange={(e) => handleChange("expYear", e.target.value, 2, 4)}
//           required
//         />
//       )}

//       {/* Step 4: CVC */}
//       {step >= 4 && (
//         <input
//           type="text"
//           placeholder="CVC (3 digits)"
//           className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none no-spinner"
//           value={form.cvc}
//           onChange={(e) => handleChange("cvc", e.target.value, 3)}
//           required
//         />
//       )}

//       {/* Always visible: Amount */}
//       <input
//         type="number"
//         placeholder="Amount in USD"
//         className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none no-spinner"
//         value={form.amount}
//         readOnly
//       />

//       {/* Submit Button */}
//       {step >= 4 && (
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
//         >
//           Continue to Payment
//         </button>
//       )}
//     </form>
//   );
// }



///                   STripe working code

// "use client";

// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { usePlan } from "@/context/PlanContext";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   useStripe,
//   useElements,
//   CardElement,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// function PaymentForm() {
//   const { paymentData } = usePlan();
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();

//   const [name, setName] = useState(paymentData?.name || "");
//   const [amount, setAmount] = useState(paymentData?.amount || 0);
//   const [planName, setPlanName] = useState(paymentData?.planName || "");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//       billing_details: { name },
//     });

//     if (error) {
//       alert(error.message);
//       return;
//     }

//     // Backend call for payment
//     const res = await fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         amount,
//         paymentMethodId: paymentMethod.id,
//       }),
//     });

//     const data = await res.json();
//     if (data.success) {
//       alert(`Payment of $${amount} successful!`);
//       router.push("/success");
//     } else {
//       alert(`Payment failed: ${data.error}`);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto p-6 space-y-4 bg-white rounded shadow"
//     >
//       <h1 className="text-center text-2xl font-bold">{planName}</h1>
//       <p className="font-bold">Paying: ${amount}</p>

//       <input
//         type="text"
//         placeholder="Cardholder Name"
//         className="border p-2 w-full rounded"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       {/* Professional Stripe Card Input */}
//       <div className="border p-3 rounded">
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#32325d",
//                 "::placeholder": { color: "#a0aec0" },
//               },
//               invalid: { color: "#fa755a" },
//             },
//           }}
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-red-500 text-white px-4 py-2 rounded w-full"
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// }

// export default function StripePaymentPage() {
//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentForm />
//     </Elements>
//   );
// }




//**********************************New Code  */
"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { usePlan } from "@/context/PlanContext";
import { FaRegCreditCard } from "react-icons/fa";

export default function CustomFormPage() {
  const { setPaymentData, selectedPlan } = usePlan();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    amount: "",
    planName: "",
  });

  const [step, setStep] = useState(1);

  // 🟢 Load data from localStorage on page load
  useEffect(() => {
    const savedForm = localStorage.getItem("paymentFormData");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  // 🟢 Load plan details if selected
  useEffect(() => {
    if (selectedPlan) {
      setForm((prev) => {
        const updated = {
          ...prev,
          amount: selectedPlan.price,
          planName: selectedPlan.title,
        };
        localStorage.setItem("paymentFormData", JSON.stringify(updated));
        return updated;
      });
    }
  }, [selectedPlan]);

  // 🟢 Save data to localStorage whenever form changes
  const updateForm = (updatedForm) => {
    setForm(updatedForm);
    localStorage.setItem("paymentFormData", JSON.stringify(updatedForm));
  };

  const handleChange = (field, value, maxLength, nextStep) => {
    const cleanValue = value.replace(/\D/g, "").slice(0, maxLength);
    const updated = { ...form, [field]: cleanValue };
    updateForm(updated);

    if (cleanValue.length === maxLength && nextStep) {
      setStep(nextStep);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Final Submitted Data:", form);
    setPaymentData(form);
    localStorage.removeItem("paymentFormData"); // ✅ clear after submission
    router.push("/stripe-payment");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200"
    >
      <h1 className="text-center text-3xl font-bold text-gray-800">{form.planName}</h1>

      {/* Cardholder Name */}
      <input
        type="text"
        placeholder="Cardholder Name"
        className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        value={form.name}
        onChange={(e) => updateForm({ ...form, name: e.target.value })}
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        value={form.email}
        onChange={(e) => updateForm({ ...form, email: e.target.value })}
        required
      />

      {/* Progressive Single Row */}
      <div className="flex gap-2">
        {/* Card Number */}
        <div className="relative flex-1">
          <FaRegCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Card Number"
            className="border p-3 pl-10 w-full rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.cardNumber}
            onChange={(e) => handleChange("cardNumber", e.target.value, 16, 2)}
            required
          />
        </div>

        {/* Expiry Month */}
        {step >= 2 && (
          <input
            type="text"
            placeholder="MM"
            className="border p-2 w-16 text-center rounded-lg outline-none transition-all"
            value={form.expMonth}
            onChange={(e) => handleChange("expMonth", e.target.value, 2, 3)}
            required
          />
        )}

        {/* Expiry Year */}
        {step >= 3 && (
          <input
            type="text"
            placeholder="YY"
            className="border p-2 w-16 text-center rounded-lg outline-none transition-all"
            value={form.expYear}
            onChange={(e) => handleChange("expYear", e.target.value, 2, 4)}
            required
          />
        )}

        {/* CVC */}
        {step >= 4 && (
          <input
            type="text"
            placeholder="CVC"
            className="border p-2 w-20 text-center rounded-lg outline-none transition-all"
            value={form.cvc}
            onChange={(e) => handleChange("cvc", e.target.value, 3)}
            required
          />
        )}
      </div>

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount in USD"
        className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        value={form.amount}
        readOnly
      />

      {/* Submit */}
      {step >= 4 && (
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Continue to Payment
        </button>
      )}
    </form>
  );
}
