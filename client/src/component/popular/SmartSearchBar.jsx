import { Mic, Search } from "lucide-react";
import { useEffect, useState } from "react";

const placeholders = [
  "Search for dishes...",
  "Looking for something spicy?",
  "Try 'Paneer Tikka' or 'Biryani'",
  "Hungry? Type your craving!",
];

export default function SmartSearchBar() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [vegOnly, setVegOnly] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap sm:flex-nowrap max-w-2xl items-center gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-md px-4 py-2 shadow-sm w-full">
      <Search size={18} className="text-zinc-500 dark:text-zinc-400" />
      <input
        type="text"
        placeholder={placeholders[placeholderIndex]}
        className="flex-1 bg-transparent outline-none text-sm text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 ml-2"
      />
      <Mic
        size={18}
        className="text-zinc-500 dark:text-zinc-400 cursor-pointer hover:text-zinc-700 dark:hover:text-white transition-colors"
      />
      
    </div>
  );
}
