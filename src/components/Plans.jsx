// "use client";

// import CheckoutForm1 from "./CheckoutForm1";

// // import CheckoutForm1 from "./CheckoutForm";

// export default function Plans() {
//   const plans = [
//     { id: 1, name: "Basic Plan", price: 500, desc: "Basic features" },
//     { id: 2, name: "Pro Plan", price: 1500, desc: "Advanced features" },
//     { id: 3, name: "Premium Plan", price: 3000, desc: "All features" },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {plans.map((plan) => (
//           <div key={plan.id} className="p-6 border rounded-lg shadow">
//             <h3 className="text-lg font-bold">{plan.name}</h3>
//             <p className="text-gray-500">{plan.desc}</p>
//             <p className="text-xl font-semibold mt-2">PKR {plan.price}</p>
//             <CheckoutForm1 plan={plan} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Plans.jsx
import { usePlan } from "@/context/PlanContext";
import { useRouter } from "next/navigation";

export default function Plans() {
  const { setSelectedPlan } = usePlan();
  const router = useRouter();

  const plans = [
    { title: "Basic Plan", price: 10 },
    { title: "Pro Plan", price: 25 },
    { title: "Premium Plan", price: 50 },
  ];

  const handleSelect = (plan) => {
    setSelectedPlan(plan); // Context me store
    localStorage.setItem("selectedPlan", JSON.stringify(plan)); // LocalStorage me store
    router.push("/checkout");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div key={plan.title} className="p-6 bg-white shadow rounded">
          <h2 className="text-lg font-bold">{plan.title}</h2>
          <p className="text-2xl font-bold">${plan.price} USD</p>
          <button
            onClick={() => handleSelect(plan)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}
