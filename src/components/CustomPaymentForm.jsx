"use client";
// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function CustomPaymentForm() {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expMonth, setExpMonth] = useState("");
//   const [expYear, setExpYear] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [name, setName] = useState("");


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("Cardholder Name:", name);
//   console.log("Card Number:", cardNumber);
//   console.log("Expiry Month:", expMonth);
//   console.log("Expiry Year:", expYear);
//   console.log("CVC:", cvc);

//   const stripe = await stripePromise;

//   const { token, error } = await stripe.createToken('card', {
//     number: cardNumber,
//     exp_month: expMonth,
//     exp_year: expYear,
//     cvc: cvc,
//     name: name,
//   });

//   if (error) {
//     console.error("Token creation failed:", error.message);
//   } else {
//     console.log("✅ Stripe Token Created:", token.id);
//     // token ko backend pe bhejo payment ke liye
//   }
// };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
//     >
//       <input
//         type="text"
//         placeholder="Cardholder Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 w-full rounded"
//         required
//       />

//       <input
//         type="text"
//         placeholder="Card Number"
//         value={cardNumber}
//         onChange={(e) => setCardNumber(e.target.value)}
//         className="border p-2 w-full rounded"
//         required
//       />

//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="MM"
//           value={expMonth}
//           onChange={(e) => setExpMonth(e.target.value)}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="YY"
//           value={expYear}
//           onChange={(e) => setExpYear(e.target.value)}
//           className="border p-2 w-full rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="CVC"
//           value={cvc}
//           onChange={(e) => setCvc(e.target.value)}
//           className="border p-2 w-full rounded"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//       >
//         Pay
//       </button>
//     </form>
//   );
// }





// "use client";
// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function CustomPaymentForm() {
//   const [name, setName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expMonth, setExpMonth] = useState("");
//   const [expYear, setExpYear] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [amount, setAmount] = useState("");
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     if (!name || !cardNumber || !expMonth || !expYear || !cvc || !amount) {
//       alert("Please fill in all fields");
//       return false;
//     }
//     if (cardNumber.length < 16) {
//       alert("Invalid card number");
//       return false;
//     }
//     if (cvc.length < 3) {
//       alert("Invalid CVC");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     console.log("Cardholder Name:", name);
//     console.log("Card Number:", cardNumber);
//     console.log("Expiry Month:", expMonth);
//     console.log("Expiry Year:", expYear);
//     console.log("CVC:", cvc);
//     console.log("Amount:", amount);

//     setLoading(true);

//     const stripe = await stripePromise;

//     // Create Token
//     const { token, error } = await stripe.createToken("card", {
//       number: cardNumber,
//       exp_month: expMonth,
//       exp_year: expYear,
//       cvc: cvc,
//       name: name,
//     });

//     if (error) {
//       alert(error.message);
//       setLoading(false);
//       return;
//     }

//     console.log("✅ Stripe Token:", token.id);

//     // Send Token to backend
//     const res = await fetch("/api/charge", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ tokenId: token.id, amount }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (data.success) {
//       alert("✅ Payment Successful!");
//     } else {
//       alert("❌ Payment Failed: " + data.error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg space-y-4"
//     >
//       <input
//         type="text"
//         placeholder="Cardholder Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 w-full rounded"
//       />

//       <input
//         type="text"
//         placeholder="Card Number"
//         value={cardNumber}
//         onChange={(e) => setCardNumber(e.target.value)}
//         className="border p-2 w-full rounded"
//       />

//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="MM"
//           value={expMonth}
//           onChange={(e) => setExpMonth(e.target.value)}
//           className="border p-2 w-full rounded"
//         />
//         <input
//           type="text"
//           placeholder="YY"
//           value={expYear}
//           onChange={(e) => setExpYear(e.target.value)}
//           className="border p-2 w-full rounded"
//         />
//         <input
//           type="text"
//           placeholder="CVC"
//           value={cvc}
//           onChange={(e) => setCvc(e.target.value)}
//           className="border p-2 w-full rounded"
//         />
//       </div>

//       <input
//         type="number"
//         placeholder="Amount in USD"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="border p-2 w-full rounded"
//       />

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// }





import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CustomPaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name || !cardNumber || !expMonth || !expYear || !cvc || !amount) {
      alert("⚠ Please fill all fields");
      return false;
    }
    if (cardNumber.length < 16) {
      alert("⚠ Invalid card number");
      return false;
    }
    if (cvc.length < 3) {
      alert("⚠ Invalid CVC");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Cardholder Name:", name);
    console.log("Card Number:", cardNumber);
    console.log("Expiry Month:", expMonth);
    console.log("Expiry Year:", expYear);
    console.log("CVC:", cvc);
    console.log("Amount:", amount);

    setLoading(true);

    const stripe = await stripePromise;

    // Create Payment Method
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: {
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
        cvc: cvc,
      },
      billing_details: {
        name: name,
      },
    });

    if (error) {
      alert("❌ " + error.message);
      setLoading(false);
      return;
    }

    console.log("✅ Payment Method Created:", paymentMethod.id);

    // Call backend to confirm payment
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("✅ Payment Successful!");
      // Save payment info to localStorage
      localStorage.setItem("paymentInfo", JSON.stringify({
        name,
        cardNumber,
        expMonth,
        expYear,
        amount,
        paymentId: data.paymentIntent.id
      }));
    } else {
      alert("❌ Payment Failed: " + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg space-y-4">
      <input
        type="text"
        placeholder="Cardholder Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="MM"
          value={expMonth}
          onChange={(e) => setExpMonth(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="YY"
          value={expYear}
          onChange={(e) => setExpYear(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <input
        type="number"
        placeholder="Amount in USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
