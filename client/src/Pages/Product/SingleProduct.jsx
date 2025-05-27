import React, { useState } from "react";

function SingleProduct() {
  const [size, setSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);
  const [chicken, setChicken] = useState(false);
  const [mushroom, setMushroom] = useState(false);

  const pizzaName = "Melting Cheese Pizza";
  const pizzaItaliano = "Pizza Italiano";
  const rating = 4.8;
  const ratingCount = 2200;
  const smallPrice = 8.99;
  const mediumPrice = 10.99;
  const largePrice = 12.99;
  const chickenPrice = 1.4;
  const mushroomPrice = 0.99;

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChickenToggle = () => {
    setChicken(!chicken);
  };

  const handleMushroomToggle = () => {
    setMushroom(!mushroom);
  };

  const calculateTotalPrice = () => {
    let basePrice = 0;
    if (size === "small") {
      basePrice = smallPrice;
    } else if (size === "medium") {
      basePrice = mediumPrice;
    } else if (size === "large") {
      basePrice = largePrice;
    }

    let totalPrice = basePrice * quantity;
    if (chicken) {
      totalPrice += chickenPrice * quantity;
    }
    if (mushroom) {
      totalPrice += mushroomPrice * quantity;
    }
    return totalPrice.toFixed(2);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      {/* Image */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/600/F0F8FF/808080?Text=Melting+Cheese+Pizza" // Replace with your actual image URL
          alt={pizzaName}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 left-2 bg-gray-100 bg-opacity-75 rounded-full p-2 text-gray-600 hover:text-gray-800">
          {/* Replace with your back arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="absolute top-2 right-8 bg-gray-100 bg-opacity-75 rounded-full p-2 text-gray-600 hover:text-gray-800">
          {/* Replace with your heart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="absolute top-2 right-2 bg-gray-100 bg-opacity-75 rounded-full p-2 text-gray-600 hover:text-gray-800">
          {/* Replace with your share icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-6 0v2c0 .23.036.456.105.663L10 11.5V16a1 1 0 001 1h4a1 1 0 001-1v-4.5l.895-.837A3.002 3.002 0 0015 8zM5 8a3 3 0 10-6 0v2c0 .23.036.456.105.663L5 11.5V16a1 1 0 001 1h4a1 1 0 001-1v-4.5l.895-.837A3.002 3.002 0 005 8z" />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {pizzaName}
        </h2>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>{pizzaItaliano}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
            {rating} ({ratingCount}+)
          </span>
        </div>

        {/* Size Options */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <button
            className={`rounded-md border border-gray-300 py-2 text-center text-sm ${
              size === "small"
                ? "border-green-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => handleSizeChange("small")}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  size === "small" ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
              <span>6" - Small</span>
              <span className="text-gray-800 font-semibold">
                ${smallPrice.toFixed(2)}
              </span>
            </div>
          </button>
          <button
            className={`rounded-md border border-gray-300 py-2 text-center text-sm ${
              size === "medium"
                ? "border-green-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => handleSizeChange("medium")}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  size === "medium" ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
              <span>8" - Medium</span>
              <span className="text-gray-800 font-semibold">
                ${mediumPrice.toFixed(2)}
              </span>
            </div>
          </button>
          <button
            className={`rounded-md border border-gray-300 py-2 text-center text-sm ${
              size === "large"
                ? "border-green-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => handleSizeChange("large")}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  size === "large" ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
              <span>10" - Large</span>
              <span className="text-gray-800 font-semibold">
                ${largePrice.toFixed(2)}
              </span>
            </div>
          </button>
        </div>

        {/* Add Ingredients */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Add Ingredients
          </h3>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {/* Replace with your chicken image */}
              <img
                src="https://via.placeholder.com/40/8FBC8F/FFFFFF?Text=Chicken"
                alt="Chicken"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <span className="text-gray-700">Chicken</span>
                <span className="text-xs text-gray-500">
                  {" "}
                  250 gm +${chickenPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handleChickenToggle}
              className={`rounded-full w-6 h-6 flex items-center justify-center ${
                chicken
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {chicken ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <div className="w-3 h-3 rounded-full bg-transparent border border-gray-400"></div>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Replace with your mushroom image */}
              <img
                src="https://via.placeholder.com/40/A0522D/FFFFFF?Text=Mushroom"
                alt="Mushroom"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <span className="text-gray-700">Mushroom</span>
                <span className="text-xs text-gray-500">
                  {" "}
                  +${mushroomPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handleMushroomToggle}
              className={`rounded-full w-6 h-6 flex items-center justify-center ${
                mushroom
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {mushroom ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <div className="w-3 h-3 rounded-full bg-transparent border border-gray-400"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="bg-gray-100 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={handleQuantityDecrement}
            className="bg-white text-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="mx-3 text-lg font-semibold text-gray-800">
            {quantity}
          </span>
          <button
            onClick={handleQuantityIncrement}
            className="bg-white text-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <button className="bg-green-500 text-white font-semibold rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400">
          Add to Cart - ${calculateTotalPrice()}
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
