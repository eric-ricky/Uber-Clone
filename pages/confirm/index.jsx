import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { carList } from "../../components/carList";
import Map from "../../components/map";

const ConfirmPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Confirm ride</title>
      </Head>

      <div className="h-screen flex flex-col md:flex-row-reverse bg-slate-50 overflow-hidden">
        <div className="relative bg-slate-500 md:w-[75%] w-full h-1/4 md:h-full">
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

        <div className="container mx-auto px-2 md:w-[25%] w-full h-3/4 md:h-full pt-8 md:pt-0">
          <div className="hidden md:flex items-center justify-between py-4">
            <div
              onClick={() => router.back()}
              className="relative h-8 w-8 cursor-pointer transition ease-in-out active:translate-y-1 active:scale-95 duration-300"
            >
              <Image
                src={`/left.png`}
                alt="plus math"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100 md:max-h-[26rem] max-h-96">
            {carList.map((list, i) => (
              <div
                key={i}
                className="flex items-center px-4 py-2 md:p-4 cursor-pointer transition ease-in-out active:scale-75 hover:scale-95 duration-300 bg-white"
              >
                <div className="relative h-20 w-20 md:w-[7rem] ">
                  <Image
                    src={`/${list.imgUrl}`}
                    alt={list.service}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-medium text-lg">{list.service}</p>
                  <p className="text-blue-400">2 min away</p>
                </div>
                <div className="ml-auto">price</div>
              </div>
            ))}
          </div>

          <div className="mt-10 mx-8 bg-slate-500">
            <button className="w-full bg-black text-white py-2 text-center text-xl">
              Confirm your ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPage;
