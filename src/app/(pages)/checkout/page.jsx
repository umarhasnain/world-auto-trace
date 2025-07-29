'use client'
import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

