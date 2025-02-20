"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    // Ensure this runs only on the client side
    const amt = searchParams.get("amount");
    if (amt) setAmount(amt);
  }, [searchParams]);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-black to-gray-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank You!</h1>
        <h2 className="text-2xl">You Successfully sent</h2>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
}
