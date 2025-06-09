import React, { useEffect, useRef, useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

const AddressAutocomplete = ({ label, name, value, onChange, onSelect }) => {
  const containerRef = useRef(null);
  const [inputWidth, setInputWidth] = useState("100%");
  const [isSuggestionsOpen, setSuggestionsOpen] = useState(false);

  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  useEffect(() => {
    setValue(value || "");
  }, [value, setValue]);

  useEffect(() => {
    if (containerRef.current) {
      const inputEl = containerRef.current.querySelector("input");
      if (inputEl) setInputWidth(inputEl.offsetWidth + "px");
    }
  }, [value]);

  useEffect(() => {
    if (status === "OK" && data.length > 0) {
      setSuggestionsOpen(true);
    } else {
      setSuggestionsOpen(false);
    }
  }, [status, data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSuggestionsOpen(false);
        clearSuggestions();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clearSuggestions]);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    setSuggestionsOpen(false);

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);

      onChange(address);

      if (onSelect) {
        onSelect({
          address,
          location: { lat, lng },
          fullResult: results[0],
        });
      }
    } catch (error) {
      console.error("Error fetching geocode:", error);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-1 w-full relative">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <input
        name={name}
        disabled={!ready}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        value={value || ""}
        placeholder="Type your address"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
        autoComplete="off"
      />
      {isSuggestionsOpen && (
        <ul
          style={{ width: inputWidth }}
          className="border border-gray-300 rounded-md mt-1 max-h-48 overflow-auto bg-white z-50 absolute left-0 top-full shadow-lg"
        >
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(description);
              }}
              className="p-2 cursor-pointer hover:bg-primary/20"
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;
