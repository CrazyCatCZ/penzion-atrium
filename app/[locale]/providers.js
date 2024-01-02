"use client";
import { useState, createContext } from "react";

export const AppContext = createContext();

export function Providers({ children }) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <AppContext.Provider
      value={{ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate }}
    >
      {children}
    </AppContext.Provider>
  );
}