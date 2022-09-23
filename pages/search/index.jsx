import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Map from "../../components/map";
import { useMapContext } from "../../lib/context/map-context";
import { getCordinates } from "../../lib/helpers/getCordinates";
import useInput from "../../lib/hooks/useInput";

const SearchPage = () => {
  const mapCtx = useMapContext();

  const router = useRouter();

  const pickup = useInput("");
  const destination = useInput(router.query.destination);

  return (
    <>
      <Head>
        <title>Search </title>
      </Head>

      <div className="h-screen flex flex-col md:flex-row-reverse bg-slate-50 overflow-hidden">
        <div className="relative bg-slate-500 md:w-[75%] w-full h-1/2 md:h-full">
          <div className="absolute md:hidden top-4 left-4 flex items-center justify-between py-4 z-50">
            <div
              onClick={() => router.back()}
              className="relative h-8 w-8 cursor-pointer transition ease-in-out active:translate-y-1 active:scale-95 duration-300 rounded-full bg-white p-4"
            >
              <Image
                src={`/left.png`}
                alt="plus math"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <Map />
        </div>

        <div className="container mx-auto px-8 md:w-[25%] w-full h-1/2 md:h-full">
          <div className="hidden md:flex items-center justify-between py-4">
            <div
              onClick={() => router.back()}
              className="relative h-6 w-6 cursor-pointer transition ease-in-out active:translate-y-1 active:scale-95 duration-300"
            >
              <Image
                src={`/left.png`}
                alt="plus math"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-2xl font-bold cursor-pointer mr-4">Uber</p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (destination && pickup) {
                console.log("good!!");

                const destinationCoords = await getCordinates(destination);
                const pickupCoords = await getCordinates(pickup);

                mapCtx.setPickupCordinates(pickupCoords);
                mapCtx.setDestinationCordinates(destinationCoords);

                // router.push("/confirm");
              }
            }}
            className="flex flex-col pt-8 md:pt-0"
          >
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-6 w-6 rounded-full overflow-hidden">
                  <Image
                    src={`/filled-circle.png`}
                    alt="plus math"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={`/vertical-line.png`}
                    alt="plus math"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-6 w-6 rounded-full overflow-hidden">
                  <Image
                    src={`/square-full.png`}
                    alt="plus math"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-6 flex-1">
                <div className="relative">
                  <input
                    onChange={pickup.onChange}
                    type="text"
                    value={pickup.value}
                    placeholder="Enter pickup location"
                    className="w-full p-4 bg-slate-200 rounded-none"
                  />
                  {pickup.suggestions?.length > 0 && (
                    <div className="absolute left-0 w-full flex flex-col bg-slate-50 z-20">
                      {pickup.suggestions?.map((place, i) => (
                        <p
                          key={i}
                          onClick={() => {
                            pickup.setValue(place.place_name);
                            pickup.setSuggestions([]);
                          }}
                          className="p-2 hover:bg-slate-200"
                        >
                          {place.place_name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <input
                    onChange={destination.onChange}
                    type="text"
                    value={destination.value}
                    placeholder="Where to?"
                    className="w-full p-4 bg-slate-200 rounded-none"
                  />
                  {destination.suggestions?.length > 0 && (
                    <div className="absolute left-0 w-full flex flex-col bg-slate-50">
                      {destination.suggestions?.map((place, i) => (
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
                  )}
                </div>
              </div>

              <div className="relative bg-slate-200 h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={`/plus-math.png`}
                  alt="plus math"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="mt-8 mx-8 flex">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 text-center text-xl mx-4"
              >
                Confirm location
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
