import React, { useState } from "react";
import { onboarding1, onboarding2, onboarding3 } from "../../assets";

const onboardingData = [
  {
    id: 1,
    title: "Search Your Favorite Food",
    description: "Discover the foods from all nearby restaurants.",
    image: onboarding1,
    buttonText: "Next",
  },
  {
    id: 2,
    title: "Get Amazing Discount",
    description: "Get 50% off on your first order & explore more offers.",
    image: onboarding2,
    buttonText: "Get Started",
  },
  {
    id: 3,
    title: "Browse Your Menu",
    description: "Find your favorite dishes anytime, anywhere.",
    image: onboarding3,
    buttonText: "Next",
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = onboardingData[currentIndex];

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Navigating to main app...");
    }
  };

  const handleSkip = () => {
    console.log("Skipping onboarding...");
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col font-sans">
      <div className="flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="text-orange-500 font-semibold flex items-center gap-1 hover:text-orange-600 transition"
        >
          Skip
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="w-full max-w-md mb-8">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full max-h-[360px] object-contain mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-orange-500 mb-3">
          {currentSlide.title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          {currentSlide.description}
        </p>
      </div>

      <div className="px-8 py-6">
        <button
          onClick={goToNext}
          className="w-full bg-orange-500 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:bg-orange-600 transition"
        >
          {currentSlide.buttonText}
        </button>
        {onboardingData.length > 1 && (
          <div className="flex justify-center mt-5">
            {onboardingData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingScreen;
