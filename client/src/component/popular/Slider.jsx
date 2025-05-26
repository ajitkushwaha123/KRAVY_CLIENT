import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-zinc-800 shadow hover:scale-105 transition"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-6 py-4 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "5vw", scrollPaddingRight: "5vw" }}
      >
        {React.Children.map(children, (child) => (
          <div className="min-w-[80vw] max-w-[90vw] snap-center">
            <div className="h-[220px] md:h-[500px] rounded-xl overflow-hidden">
              {child}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-zinc-800 shadow hover:scale-105 transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
