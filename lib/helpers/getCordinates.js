export const getCordinates = async (location) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?${new URLSearchParams(
    {
      access_token: process.env.MAPBOX_API_KEY,
      limit: 1,
    }
  )}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.features[0]?.center;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const gerDirectio = async (profile, to, from) => {
  const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/{37.01%2C-1.1}%3B36.95694%2C-1.14889?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoiZXJpY3JpY2t5IiwiYSI6ImNsODZyM2xpNTB3eHgzdXF0ZGpsbnJkbDEifQ.bq3-UXutOFcI7E65PD_o3g`;
  const res = await fetch();
};
