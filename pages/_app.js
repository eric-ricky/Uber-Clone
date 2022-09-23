import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import MapContextProvider from "../lib/context/map-context";

function MyApp({ Component, pageProps }) {
  return (
    <MapContextProvider>
      <Component {...pageProps} />
    </MapContextProvider>
  );
}

export default MyApp;
