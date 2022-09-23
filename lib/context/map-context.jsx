import { createContext, useContext, useState } from "react";

const MapContext = createContext();

export const MapContextProvider = ({ children }) => {
  const [destinationCordinates, setDestinationCordinates] = useState([]);
  const [pickupCordinates, setPickupCordinates] = useState([]);

  return (
    <MapContext.Provider
      value={{
        pickupCordinates,
        setPickupCordinates,
        destinationCordinates,
        setDestinationCordinates,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;

export const useMapContext = () => useContext(MapContext);
