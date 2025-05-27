import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router";

// Constants
const AVATAR_URL =
  "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light";

const USER_NAME = "Ajit Kushwaha";
const NOTIFICATION_COUNT = 3;
const CART_COUNT = 1;
const SEARCH_PLACEHOLDER = "Search for restaurants, cuisines or dishes";
const MOBILE_SEARCH_PLACEHOLDER = "Search restaurants, cuisines or dishes";

const Header = ({ location = "Bangalore" }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white dark:bg-background-dark shadow-md dark:shadow-surface-dark py-3 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center">
          <img
            src={AVATAR_URL}
            alt="User Profile"
            className="w-9 h-9 rounded-full object-cover mr-3"
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {USER_NAME}
          </p>
        </div>

        <div className="hidden sm:flex flex-1 max-w-2xl items-center bg-zinc-100 dark:bg-zinc-800 rounded-md px-3 py-2">
          <div className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-medium">{location}</span>
            <ChevronDown size={16} />
          </div>
          <div className="border-l border-zinc-300 dark:border-zinc-600 mx-3 h-5" />
          <Search size={16} className="text-zinc-500 dark:text-zinc-400" />
          <input
            type="text"
            placeholder={SEARCH_PLACEHOLDER}
            className="bg-transparent outline-none text-sm ml-2 w-full text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700">
            <svg
              className="h-6 w-6 text-zinc-600 dark:text-zinc-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9.76V13.5a6 6 0 00-.75 2.846"
              />
            </svg>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
              {NOTIFICATION_COUNT}
            </span>
          </button>

          <button
            onClick={() => navigate("/login")}
            className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
          >
            <svg
              className="h-6 w-6 text-zinc-600 dark:text-zinc-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
              {CART_COUNT}
            </span>
          </button>
        </div>
      </div>

      <div className="sm:hidden mt-3 px-2">
        <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-md px-3 py-2">
          <div className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-medium">{location}</span>
            <ChevronDown size={16} />
          </div>
          <div className="border-l border-zinc-300 dark:border-zinc-600 mx-3 h-5" />
          <Search size={16} className="text-zinc-500 dark:text-zinc-400" />
          <input
            type="text"
            placeholder={MOBILE_SEARCH_PLACEHOLDER}
            className="bg-transparent outline-none text-sm ml-2 w-full text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
