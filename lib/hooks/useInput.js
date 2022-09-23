import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    setValue(e.target.value);

    const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
      e.target.value
    }.json?${new URLSearchParams({
      access_token: process.env.MAPBOX_API_KEY,
      autocomplete: true,
    })}`;

    try {
      console.log("fetching...");
      const res = await fetch(endpoint);
      const data = await res.json();
      setSuggestions(data?.features);

      console.log(data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions,
  };
};

export default useInput;
