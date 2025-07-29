"use client";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  // Example: Fixed amount for now (PKR 1500)
  const [amount] = useState(1500);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // 1. Call API to create Payment Intent
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100, currency: "pkr" }),
    });
    const { clientSecret } = await res.json();

    // 2. Confirm payment with Stripe
    const cardElement = elements.getElement(CardElement);
    const { paymentIntent, error, paymentMethod } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: { name, email },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Payment Successful ✅");

      // Save safe data to LocalStorage
      localStorage.setItem("paymentInfo", JSON.stringify({
        paymentIntentId: paymentIntent.id,
        status: paymentIntent.status,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        user: { name, email },
        card: {
          brand: paymentMethod.card.brand,
          last4: paymentMethod.card.last4
        }
      }));
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>

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
        {loading ? "Processing..." : `Pay PKR ${amount}`}
      </button>
    </form>
  );
}
