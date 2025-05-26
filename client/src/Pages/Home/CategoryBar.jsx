import React, { useState } from "react";

const DummyImageURL =
  "https://via.placeholder.com/80/cccccc/ffffff?Text=No+Image";

const CategoryBar = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.name || "All"
  );

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    console.log(`Selected category: ${categoryName}`);
  };

  const handleImageError = (event) => {
    if (event.target.src !== DummyImageURL) {
      event.target.onerror = null;
      event.target.src = DummyImageURL;
    }
  };

  return (
    <div className="bg-white chalaja shadow-sm overflow-x-auto py-2 category-bar-scrollable">
      <div className="container mx-auto flex items-center space-x-4 sm:space-x-6 md:space-x-8 px-4 sm:px-6 lg:px-8">
        {categories.map(({ name, image }) => (
          <button
            key={name}
            onClick={() => handleCategoryClick(name)}
            className={`flex flex-col items-center text-sm sm:text-base font-medium focus:outline-none ${
              activeCategory === name
                ? "text-primary-500 dark:text-primary-400"
                : "text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
            }`}
          >
            <div className="relative w-12 h-12 sm:w-20 sm:h-20 rounded-md overflow-hidden mb-1">
              <img
                src={image || DummyImageURL}
                alt={image ? name : `No image for ${name}`}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
            <span>{name}</span>
            {activeCategory === name && (
              <div className="h-1 w-full bg-primary-500 dark:bg-primary-400 rounded-full mt-1"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
