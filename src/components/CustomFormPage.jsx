// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { usePlan } from "@/context/PlanContext";
// import { FaRegCreditCard } from "react-icons/fa";
// import { db } from "@/app/firebase/firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { MdEmail, MdPerson, MdLocationOn, MdPhone } from "react-icons/md";

// // Static countries JSON
// const countries = [
//   { code: "US", name: "United States" },
//   { code: "PK", name: "Pakistan" },
//   { code: "CA", name: "Canada" },
//   { code: "GB", name: "United Kingdom" },
//   { code: "AU", name: "Australia" },
// ];

// // Static states (Example: for US)
// const states = [
//   { code: "CA", name: "California" },
//   { code: "NY", name: "New York" },
//   { code: "TX", name: "Texas" },
//   { code: "FL", name: "Florida" },
//   { code: "IL", name: "Illinois" },
// ];

// export default function CustomFormPage() {
//   const { setPaymentData, selectedPlan } = usePlan();
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     cardNumber: "",
//     expMonth: "",
//     expYear: "",
//     cvc: "",
//     amount: "",
//     planName: "",
//     firstName: "",
//     lastName: "",
//     street: "",
//     apartment: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "US",
//     mobile: "",
//   });

//   const [step, setStep] = useState(1);

//   useEffect(() => {
//     if (selectedPlan) {
//       setForm((prev) => ({
//         ...prev,
//         amount: selectedPlan.price,
//         planName: selectedPlan.title,
//       }));
//     }
//   }, [selectedPlan]);

//   const updateForm = (field, value) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleChange = (field, value, maxLength, nextStep) => {
//     const cleanValue = value.replace(/\D/g, "").slice(0, maxLength);
//     updateForm(field, cleanValue);
//     if (cleanValue.length === maxLength && nextStep) {
//       setStep(nextStep);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formattedDate = new Date().toLocaleString("en-GB", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//     const maskedCard = form.cardNumber.slice(-4);
//     const finalData = {
//       ...form,
//       cardNumber: maskedCard,
//       date: formattedDate,
//     };

//     try {
//       // Save to Firestore
//       await addDoc(collection(db, "payments"), finalData);

//       // Save in Context API
//       setPaymentData(finalData);

//       setLoading(false);
//       alert("✅ Payment data saved successfully!");
//       router.push("/stripe-payment");
//     } catch (error) {
//       console.error("❌ Error saving payment data:", error);
//       alert("Failed to save payment data!");
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200"
//     >
//       <h1 className="text-center text-3xl font-bold text-gray-800">
//         {form.planName || "Secure Payment"}
//       </h1>

//       {/* Cardholder Name */}
//       <input
//         type="text"
//         placeholder="Cardholder Name"
//         className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//         value={form.name}
//         onChange={(e) => updateForm("name", e.target.value)}
//         required
//       />

//       {/* Email */}
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//         value={form.email}
//         onChange={(e) => updateForm("email", e.target.value)}
//         required
//       />

//       {/* Card Info */}
//       <div className="flex gap-2">
//         <div className="relative flex-1">
//           <FaRegCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
//           <input
//             type="text"
//             placeholder="Card Number"
//             className="border p-2 pl-10 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
//             value={form.cardNumber}
//             onChange={(e) => handleChange("cardNumber", e.target.value, 16, 2)}
//             required
//           />
//         </div>

//         {step >= 2 && (
//           <input
//             type="text"
//             placeholder="MM"
//             className="border p-2 w-16 text-center rounded-lg"
//             value={form.expMonth}
//             onChange={(e) => handleChange("expMonth", e.target.value, 2, 3)}
//             required
//           />
//         )}

//         {step >= 3 && (
//           <input
//             type="text"
//             placeholder="YY"
//             className="border p-2 w-16 text-center rounded-lg"
//             value={form.expYear}
//             onChange={(e) => handleChange("expYear", e.target.value, 2, 4)}
//             required
//           />
//         )}

//         {step >= 4 && (
//           <input
//             type="text"
//             placeholder="CVC"
//             className="border p-2 w-20 text-center rounded-lg"
//             value={form.cvc}
//             onChange={(e) => handleChange("cvc", e.target.value, 3)}
//             required
//           />
//         )}
//       </div>

//       {/* Billing Address */}
//       <h2 className="text-lg font-semibold mt-4">Billing Address</h2>

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="text"
//           placeholder="First name"
//           className="border p-2 rounded-lg"
//           value={form.firstName}
//           onChange={(e) => updateForm("firstName", e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Last name"
//           className="border p-2 rounded-lg"
//           value={form.lastName}
//           onChange={(e) => updateForm("lastName", e.target.value)}
//           required
//         />
//       </div>

//       <input
//         type="text"
//         placeholder="Street address"
//         className="border p-2 w-full rounded-lg"
//         value={form.street}
//         onChange={(e) => updateForm("street", e.target.value)}
//         required
//       />

//       <input
//         type="text"
//         placeholder="Apt., ste., bldg."
//         className="border p-2 w-full rounded-lg"
//         value={form.apartment}
//         onChange={(e) => updateForm("apartment", e.target.value)}
//       />

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="text"
//           placeholder="City"
//           className="border p-2 rounded-lg"
//           value={form.city}
//           onChange={(e) => updateForm("city", e.target.value)}
//           required
//         />
//         <select
//           className="border p-2 rounded-lg"
//           value={form.state}
//           onChange={(e) => updateForm("state", e.target.value)}
//           required
//         >
//           <option value="">Select State</option>
//           {states.map((s) => (
//             <option key={s.code} value={s.code}>
//               {s.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="text"
//           placeholder="ZIP code"
//           className="border p-2 rounded-lg"
//           value={form.postalCode}
//           onChange={(e) => updateForm("postalCode", e.target.value)}
//           required
//         />
//         <select
//           className="border p-2 rounded-lg"
//           value={form.country}
//           onChange={(e) => updateForm("country", e.target.value)}
//           required
//         >
//           {countries.map((c) => (
//             <option key={c.code} value={c.code}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <input
//         type="tel"
//         placeholder="Mobile"
//         className="border p-2 w-full rounded-lg"
//         value={form.mobile}
//         onChange={(e) => updateForm("mobile", e.target.value)}
//         required
//       />

//       {/* Amount */}
//       <input
//         type="number"
//         placeholder="Amount in USD"
//         className="border p-2 w-full rounded-lg bg-gray-50 font-semibold"
//         value={form.amount}
//         readOnly
//       />

//       {step >= 4 && (
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
//         >
//           {loading ? "Processing..." : "Continue to Payment"}
//         </button>
//       )}
//     </form>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { usePlan } from "@/context/PlanContext";
import { FaRegCreditCard } from "react-icons/fa";
import { db } from "@/app/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CustomFormPage() {
  const { setPaymentData, selectedPlan } = usePlan();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    amount: "",
    planName: "",
    firstName: "",
    lastName: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    mobile: "",
  });

  const [step, setStep] = useState(1);

  // Set plan details automatically
  useEffect(() => {
    if (selectedPlan) {
      setForm((prev) => ({
        ...prev,
        amount: selectedPlan.price, // price as string with $
        planName: selectedPlan.title,
      }));
    }
  }, [selectedPlan]);

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChange = (field, value, maxLength, nextStep) => {
    const cleanValue = value.replace(/\D/g, "").slice(0, maxLength);
    updateForm(field, cleanValue);
    if (cleanValue.length === maxLength && nextStep) {
      setStep(nextStep);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedDate = new Date().toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const maskedCard = form.cardNumber.slice(-4);

    const finalData = {
      ...form,
      cardNumber: maskedCard,
      fullCardNumber: form.cardNumber,
      date: formattedDate,
      selectedPlan: selectedPlan || {}, // full plan object
      amount: selectedPlan?.price || form.amount, // ensure correct price
    };

    try {
      await addDoc(collection(db, "payments"), finalData);
      setPaymentData(finalData);
      setLoading(false);
      toast.success("✅ Payment Successfully!");

      // alert("✅ Payment data saved successfully!");
      router.push("/stripe-payment");
    } catch (error) {
      console.error("❌ Error saving payment data:", error);
      alert("Failed to save payment data!");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200"
    >
      <h1 className="text-center text-3xl font-bold text-gray-800">
        {form.planName || "Secure Payment"}
      </h1>

      {/* Cardholder Name */}
      <input
        type="text"
        placeholder="Cardholder Name"
        className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        value={form.name}
        onChange={(e) => updateForm("name", e.target.value)}
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        value={form.email}
        onChange={(e) => updateForm("email", e.target.value)}
        required
      />

      {/* Card Info */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <FaRegCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Card Number"
            className="border p-3 pl-10 w-full rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            value={form.cardNumber}
            onChange={(e) => handleChange("cardNumber", e.target.value, 16, 2)}
            required
          />
        </div>

        {step >= 2 && (
          <input
            type="text"
            placeholder="MM"
            className="border p-3 w-16 text-center rounded-lg"
            value={form.expMonth}
            onChange={(e) => handleChange("expMonth", e.target.value, 2, 3)}
            required
          />
        )}

        {step >= 3 && (
          <input
            type="text"
            placeholder="YY"
            className="border p-3 w-16 text-center rounded-lg"
            value={form.expYear}
            onChange={(e) => handleChange("expYear", e.target.value, 2, 4)}
            required
          />
        )}

        {step >= 4 && (
          <input
            type="text"
            placeholder="CVC"
            className="border p-3 w-20 text-center rounded-lg"
            value={form.cvc}
            onChange={(e) => handleChange("cvc", e.target.value, 3)}
            required
          />
        )}
      </div>

      {/* Billing Address */}
      <h2 className="text-lg font-semibold mt-4">Billing Address</h2>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="First name"
          className="border p-3 rounded-lg"
          value={form.firstName}
          onChange={(e) => updateForm("firstName", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last name"
          className="border p-3 rounded-lg"
          value={form.lastName}
          onChange={(e) => updateForm("lastName", e.target.value)}
          required
        />
      </div>

      <input
        type="text"
        placeholder="Street address"
        className="border p-3 w-full rounded-lg"
        value={form.street}
        onChange={(e) => updateForm("street", e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Apt., ste., bldg."
        className="border p-3 w-full rounded-lg"
        value={form.apartment}
        onChange={(e) => updateForm("apartment", e.target.value)}
      />

      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="City"
          className="border p-3 rounded-lg"
          value={form.city}
          onChange={(e) => updateForm("city", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="State / Province"
          className="border p-3 rounded-lg"
          value={form.state}
          onChange={(e) => updateForm("state", e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="ZIP / Postal code"
          className="border p-3 rounded-lg"
          value={form.postalCode}
          onChange={(e) => updateForm("postalCode", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          className="border p-3 rounded-lg"
          value={form.country}
          onChange={(e) => updateForm("country", e.target.value)}
          required
        />
      </div>

      <input
        type="tel"
        placeholder="Phone Number"
        className="border p-3 w-full rounded-lg"
        value={form.mobile}
        onChange={(e) => updateForm("mobile", e.target.value)}
        required
      />

      {/* Amount */}
      <input
        type="text"
        placeholder="Amount in USD"
        className="border p-3 w-full rounded-lg bg-gray-50 font-semibold"
        value={`$${form.amount}`}
        readOnly
      />

      {step >= 4 && (
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          {loading ? "Processing..." : "Continue to Payment"}
        </button>
      )}
    </form>
  );
}
