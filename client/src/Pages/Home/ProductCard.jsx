import { Clock } from "lucide-react";
import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [readMore, setReadMore] = useState(false);

  const truncate = (text, maxLength) =>
    text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="bg-gray-50 relative rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg">
      <div className="h-40 w-full">
        <img
          className="w-full h-full object-cover"
          src={product.imageUrl}
          alt={product.name}
        />

        <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded shadow">
          ⭐ {product.rating.toFixed(1)}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title truncated */}
        <h3 className="text-base font-semibold text-gray-800 truncate">
          {truncate(product.name, 40)}
        </h3>

        {/* Description with gray text, truncate or full */}
        <p className="text-sm text-gray-500">
          {readMore ? product.description : truncate(product.description, 70)}
        </p>

        {/* Read More / Less toggle if description is longer */}
        {product.description.length > 70 && (
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-xs text-green-600 font-semibold focus:outline-none"
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center flex-wrap gap-2">
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-xs mr-2">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="font-bold text-green-600 text-sm mr-2">
              ₹{product.discountedPrice}
            </span>
            {product.deliveryTime && (
              <div className="flex hidden items-center text-gray-500 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                <span>{product.deliveryTime} min</span>
              </div>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-600 text-white rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4">
      {products?.map((product) => (
        <ProductCard
          key={product?.name}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
