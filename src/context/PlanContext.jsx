'use client';
import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null)
  const [paymentData, setPaymentData] = useState({
    name: "",
    email:"",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    amount: "",
  });


  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan,paymentInfo,  setPaymentInfo ,paymentData, setPaymentData}}>
      {children}
    </PlanContext.Provider>
  );
};
