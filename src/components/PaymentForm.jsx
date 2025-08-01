"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [name, setName] = useState("");
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedPlan = localStorage.getItem("selectedPlan");
        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements || !plan) return;

        setLoading(true);

        // Backend request to create payment intent
        const res = await fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: plan.price }),
        });

        const { clientSecret } = await res.json();

        // Confirm payment
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: { name },
            },
        });

        if (result.error) {
            alert(result.error.message);
        } else if (result.paymentIntent.status === "succeeded") {
            alert("✅ Payment successful!");

            // Save all info to localStorage
            localStorage.setItem(
                "userPaymentInfo",
                JSON.stringify({
                    name,
                    plan: plan.name,
                    amount: plan.price,
                    paymentId: result.paymentIntent.id,
                    date: new Date().toISOString(),
                })
            );
        }

        setLoading(false);
    };

    if (!plan) {
        return <p className="text-center mt-10">No plan selected. Go back to plans page.</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg space-y-4"
        >
            <h2 className="text-xl font-bold">
                Pay for {plan.name} Plan (${plan.price})
            </h2>

            <input
                type="text"
                placeholder="Cardholder Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border p-2 w-full rounded"
                
            />

            <div>
                <label className="block mb-1 font-medium">Card Number</label>
                <CardNumberElement className="border p-2 w-full rounded" onChange={(event) => {
                    console.log("Card Number Status:", event.complete ? "Complete" : "Incomplete",event.target.value);
                }} />
            </div>

            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block mb-1 font-medium">Expiry Date</label>
                    <CardExpiryElement className="border p-2 w-full rounded" onChange={(event) => {
                        console.log("Card Number Status:", event.target.value);
                    }} />
                </div>
                <div className="flex-1">
                    <label className="block mb-1 font-medium">CVC</label>
                    <CardCvcElement className="border p-2 w-full rounded" />
                </div>
            </div>

            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                {loading ? "Processing..." : `Pay $${plan.price}`}
            </button>
        </form>
    );
}

export default function PaymentForm() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
