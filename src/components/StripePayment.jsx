
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
//     planName:""
//   });
// console.log("paymentData",paymentData);
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
//         <div>
//         <h1 className=" py-4 text-center text-4xl font-bold">{form.planName}</h1>
//         </div>
//       <input
//       readOnly
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
//         readOnly
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
//       <CustomStripeForm />
//     </Elements>
//   );
// }
"use client";
import { usePlan } from "@/context/PlanContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CustomStripeForm() {
  const { paymentData } = usePlan();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    planName: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (paymentData) {
      setForm(paymentData);
    }
  }, [paymentData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true); // disable button

    const cardElement = elements.getElement(CardElement);

    try {
      // Backend se client_secret lo
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(String(form.amount).replace(/[^0-9.]/g, "")) }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`❌ Payment failed: ${data.error}`);
        setLoading(false);
        return;
      }

      const { clientSecret } = data;

      // Stripe payment confirm karo
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: form.name,
            email: form.email,
          },
        },
      });

      if (error) {
        toast.error(`❌ ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        toast.success(`Payment of $${form.amount} successful!`);
        localStorage.setItem(
          "lastPayment",
          JSON.stringify({
            ...form,
            paymentId: paymentIntent.id,
            status: paymentIntent.status,
            date: new Date().toISOString(),
          })
        );
        router.push("/thank-you");
      }
    } catch (err) {
      toast.error("❌ Something went wrong with payment!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white rounded shadow">
      <h1 className="py-4 text-center text-4xl font-bold">{form.planName}</h1>

      <input type="text" value={form.name} readOnly className="border p-2 w-full rounded" />
      <input type="email" value={form.email} readOnly className="border p-2 w-full rounded" />

      <p className="font-bold">Paying: {`$${form.amount}`}</p>

      <CardElement
        options={{
          style: {
            base: { fontSize: "16px", color: "#32325d" },
            invalid: { color: "#fa755a" },
          },
        }}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className={`bg-red-500 text-white px-4 py-2 rounded w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default function StripePaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <CustomStripeForm />
    </Elements>
  );
}
