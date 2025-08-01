"use client";
import { usePlan } from "@/context/PlanContext";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const { paymentInfo: contextPaymentInfo } = usePlan();
  const [paymentInfo, setPaymentInfo] = useState(contextPaymentInfo);

  // Load from localStorage if context empty
  useEffect(() => {
    if (!paymentInfo) {
      const localData = localStorage.getItem("lastPayment");
      if (localData) {
        setPaymentInfo(JSON.parse(localData));
      }
    }
  }, [paymentInfo]);

  // If no payment found
  if (!paymentInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-center">
        <h1 className="text-3xl font-bold text-white">⚠ No Payment Found</h1>
        <p className="text-gray-400 mt-2">Please complete your payment first.</p>
      </div>
    );
  }

  // Format date
  const formattedDate = new Date(paymentInfo.date).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  // Last 4 digits of card
  const last4 = paymentInfo.cardNumber
    ? paymentInfo.cardNumber.slice(-4)
    : "****";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-green-500 mb-4">🎉 Thank You!</h1>
      <p className="text-white mb-6">Your payment was successful.</p>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md space-y-3">
        <p><strong>Name:</strong> {paymentInfo?.name}</p>
        <p><strong>Email:</strong> {paymentInfo?.email}</p>
        <p><strong>Plan:</strong> {paymentInfo?.planName}</p>
        <p><strong>Amount:</strong> ${paymentInfo?.amount}</p>
        <p><strong>Card:</strong> **** **** **** {last4}</p>
        <p><strong>Date:</strong> {formattedDate}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-semibold">{paymentInfo?.status}</span>
        </p>
        {/* <p><strong>Payment ID:</strong> {paymentInfo?.paymentId}</p> */}
      </div>
    </div>
  );
}
