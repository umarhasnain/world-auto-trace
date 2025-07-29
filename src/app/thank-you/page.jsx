"use client";
import { usePlan } from "@/context/PlanContext";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const { paymentInfo: contextPaymentInfo } = usePlan();
  const [paymentInfo, setPaymentInfo] = useState(contextPaymentInfo);

  // Fallback to localStorage if context is empty (on refresh)
  useEffect(() => {
    if (!contextPaymentInfo) {
      const localData = localStorage.getItem("paymentInfo");
      if (localData) {
        setPaymentInfo(JSON.parse(localData));
      }
    }
  }, [contextPaymentInfo]);

  if (!paymentInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-center">
        <h1 className="text-3xl font-bold text-white">⚠ No Payment Found</h1>
        <p className="text-gray-400 mt-2">Please complete your payment first.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-green-500 mb-4">🎉 Thank You!</h1>
      <p className="text-white mb-6">Your payment was successful.</p>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <p><strong>Name:</strong> {paymentInfo.user.name}</p>
        <p><strong>Email:</strong> {paymentInfo.user.email}</p>
        <p><strong>Plan:</strong> {paymentInfo.plan.title}</p>
        <p>
          <strong>Amount:</strong> ${paymentInfo.amount}{" "}
          {paymentInfo.currency.toUpperCase()}
        </p>
        <p>
          <strong>Card:</strong> {paymentInfo.card.brand.toUpperCase()} ending in{" "}
          {paymentInfo.card.last4}
        </p>
        <p><strong>Status:</strong> <span className="text-green-600">{paymentInfo.status}</span></p>
      </div>
    </div>
  );
}
