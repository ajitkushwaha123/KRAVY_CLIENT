import React from "react";
import { Clock } from "lucide-react";

const ValuePackCard = ({
  ad = false,
  imageSrc,
  title,
  restaurantName,
  originalPrice,
  discountedPrice,
  deliveryTime,
  onClick,
}) => {
  return (
    <div className="relative shadow-md bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 overflow-hidden w-64 md:w-72 shrink-0">
      {ad && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded z-10">
          AD
        </div>
      )}
      <div className="h-40 w-full">
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">{title}</h3>
        <h4 className="text-gray-600 text-xs mb-2">{restaurantName}</h4>
        <div className="flex items-center mb-2">
          {originalPrice && (
            <span className="text-gray-500 line-through text-xs mr-2">
              ₹{originalPrice}
            </span>
          )}
          <span className="font-bold text-green-600 text-sm mr-2">
            ₹{discountedPrice}
          </span>
          {deliveryTime && (
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              <span>{deliveryTime} min</span>
            </div>
          )}
        </div>
        <button
          onClick={onClick}
          className="bg-white hover:bg-indigo-600 border-2 border-indigo-600 text-indigo-600 text-sm font-semibold py-2 px-4 rounded-md hover:bg-primary-600 hover:text-white transition"
        >
          View & add items →
        </button>
      </div>
    </div>
  );
};

const ValuePackItems = ({ valuePacks }) => {
  return (
    <div className="py-6 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 px-4">
        Value Packs
      </h2>

      <div className="relative">
        {/* <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" /> */}

        {/* <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" /> */}

        <div className="overflow-x-auto chalaja py-2 px-4 no-scrollbar scroll-smooth">
          <div className="flex gap-4">
            {valuePacks.map((pack) => (
              <ValuePackCard key={pack.id} {...pack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePackItems;
