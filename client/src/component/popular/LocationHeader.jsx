import { ChevronDown, MapPin } from "lucide-react";

const LOCATION = {
  name: "Rajokri new delhi - 110038",
  city: "New Delhi",
};

export default function LocationHeader() {
  return (
    <div className="flex max-w-[180px] sm:max-w-[240px] md:max-w-[300px] items-center justify-between px-4 py-2 bg-white font-poppins">
      <div className="flex items-center">
        {/* <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border bg-white text-green-600">
          <MapPin className="w-6 h-6" />
        </div> */}

        <div className="text-sm text-gray-700 font-semibold leading-tight min-w-0">
          <div className="flex items-center gap-1 truncate max-w-[160px] sm:max-w-[220px] md:max-w-[280px]">
            <span className="truncate">{LOCATION.name}</span>
            <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
          </div>
          <p className="text-gray-400 font-normal truncate">{LOCATION.city}</p>
        </div>
      </div>
    </div>
  );
}
