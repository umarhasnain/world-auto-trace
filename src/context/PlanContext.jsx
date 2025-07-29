'use client';
import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};
