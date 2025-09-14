import { useState } from "react";
import apiClient from "@/libs/api";

// Modified to work with custom amounts instead of priceId
const ButtonCheckout = ({ amount, planName }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const res = await apiClient.post("/stripe/create-checkout", {
        amount,
        planName,
        successUrl: window.location.href,
        cancelUrl: window.location.href,
      });

      window.location.href = res.url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="btn btn-primary w-full py-3 whitespace-nowrap"
      onClick={() => handlePayment()}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        "Start Dominating Google"
      )}
    </button>
  );
};

export default ButtonCheckout;
