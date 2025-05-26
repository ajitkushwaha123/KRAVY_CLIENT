import { Clock } from "lucide-react";
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-50 relative rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg">
      {/* Image */}
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
      {/* <div className="relative w-full aspect-square bg-white">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium py-0.5 px-2 rounded shadow">
          ⭐ {product.rating.toFixed(1)}
        </div>
      </div> */}

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.restaurant}</p>

        {/* <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3 flex-wrap">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 fill-current text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 7v5l4 2.5V12z" />
            </svg>
            {product.deliveryTime} min
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 fill-current text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5v-9h14v9zm0-11H5V5h14v3z" />
            </svg>
            {product.calories} Kcal
          </span>
        </div> */}

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center mb-2">
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-xs mr-2">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="font-bold text-green-600 text-sm mr-2">
              ₹{product.discountedPrice}
            </span>
            {product.deliveryTime && (
              <div className="md:flex hidden items-center text-gray-500 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                <span>{product.deliveryTime} min</span>
              </div>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-600 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4">
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
