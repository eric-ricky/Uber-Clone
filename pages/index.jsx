import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Map from "../components/map";
import useInput from "../lib/hooks/useInput";

const actions = [
  {
    imgUrl: "uberx",
    profile: "driving",
  },
  {
    imgUrl: "bike",
    profile: "cycling",
  },
  {
    imgUrl: "uberschedule",
    profile: "walking",
  },
];

const Home = () => {
  const destination = useInput("");
  const [profile, setProfile] = useState("driving");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Uber clone</title>
      </Head>

      <div className="h-screen flex flex-col md:flex-row-reverse bg-slate-50">
        <div className="md:w-[75%] w-full h-[20%] md:h-screen bg-slate-800">
          <Map />
        </div>

        <div className="container mx-auto px-6 md:w-[25%] w-full h-[80%] md:h-screen">
          <div className="flex items-center justify-between py-10">
            <p className="text-4xl font-bold cursor-pointer">Uber</p>
            <div className="flex items-center space-x-2">
              <p className="text-lg font-medium">Mercy Kyalo</p>

              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="hero grocery"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {actions.map((action, i) => (
              <div
                key={i}
                onClick={() => setProfile(action.profile)}
                className={`relative bg-slate-200 h-24 w-24 md:w-[7rem] cursor-pointer transition ease-in-out active:translate-y-1 active:scale-75 hover:scale-95 duration-300 ${
                  profile === action.profile
                    ? "bg-slate-400 -translate-y-1 scale-110"
                    : ""
                }`}
              >
                <Image
                  src={`/${action.imgUrl}.png`}
                  alt="hero grocery"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (destination.value)
                router.push({
                  pathname: "/search",
                  query: { profile, destination: destination.value },
                });
            }}
            className="mt-8"
          >
            <input
              onChange={destination.onChange}
              value={destination.value}
              type="text"
              placeholder="Where to?"
              className="w-full p-4 bg-slate-200 rounded-none"
            />
            <div className="flex flex-col bg-slate-100">
              {destination.suggestions?.length > 0 &&
                destination.suggestions?.map((place, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      destination.setValue(place.place_name);
                      destination.setSuggestions([]);
                    }}
                    className="p-2 hover:bg-slate-200"
                  >
                    {place.place_name}
                  </p>
                ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
