"use client";
import React, { useEffect, useState } from "react";

const Countoun = () => {
  const [countdown, setCountdown] = useState(1800); // Initial countdown time in seconds (30 minutes)
  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Convert countdown to hours, minutes, and seconds
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
  return (
    <div>
      <p className="text-red-500 font-semibold bg-slate-100 p-3 rounded-md shadow-md">
        Sale Ends In: {hours} hours | {minutes} minutes | {seconds} seconds
      </p>
    </div>
  );
};

export default Countoun;
