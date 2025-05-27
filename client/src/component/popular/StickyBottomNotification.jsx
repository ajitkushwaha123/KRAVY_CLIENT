import React from "react";
import { useNavigate } from "react-router";

const StickyBottomNotification = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/cart")}
      className="sticky bottom-0 bg-green-600 text-white p-3 flex flex-col md:flex-row items-center justify-between shadow-md max-w-full"
    >
      <div className="flex items-center gap-2">
        <span className="font-semibold text-base md:text-lg">
          3 items added
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-sm mt-2 md:mt-0 md:ml-6 max-w-md text-center md:text-left">
        You can apply <span className="font-semibold">GET50</span> to get Flat
        ₹50 OFF above ...
      </p>
    </div>
  );
};

export default StickyBottomNotification;
