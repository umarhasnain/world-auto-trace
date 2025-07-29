'use client';
import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null)

  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan,paymentInfo,  setPaymentInfo }}>
      {children}
    </PlanContext.Provider>
  );
};
