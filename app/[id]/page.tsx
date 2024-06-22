import React from "react";
import { fetchAnimateByID } from "../action";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"], weight: "700" });
type hashtagItem = {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
};

async function Page() {
  const headersList = headers().get("next-url");
  const sliceData = headersList?.split("/");
  const data = await fetchAnimateByID(sliceData ? Number(sliceData[1]) : 1);

  return (
    <main className="w-full mt-12 mb-12 flex flex-col items-start gap-4">
      <div className="w-full flex flex-col sm:flex-row items-start justify-start gap-2 bg-transparent">
        <img
          src={`https://shikimori.one${data.image.original}`}
          alt="image"
          className="w-full h-full sm:max-w-[300px] sm:rounded-md object-cover"
        />
        <div
          className={cn(
            "w-full flex flex-col items-start gap-3",
            inter.className
          )}
        >
          <span className="text-[18px] flex items-center gap-2">
            Name : <h1 className="text-gray-300 font-bold">{data.name}</h1>
          </span>
          <span className="text-[18px] flex items-center gap-2">
            Score : <p className="text-gray-300 font-bold">{data.score}</p>
          </span>
          <span className="text-[18px] flex items-center gap-2">
            status : <p className="text-gray-300 font-bold">{data.status}</p>
          </span>
          <span className="text-[18px] flex items-center gap-2">
            episodes :{" "}
            <p className="text-gray-300 font-bold">{data.episodes}</p>
          </span>
          <span className="text-[18px] flex items-center gap-2">
            aired_on :{" "}
            <p className="text-gray-300 font-bold">{data.aired_on}</p>
          </span>
          <span className="text-[18px] flex items-center gap-2">
            released_on :{" "}
            <p className="text-gray-300 font-bold">{data.released_on}</p>
          </span>
          <span className="text-[18px] flex items-center gap-2">
            rating : <p className="text-gray-300 font-bold">{data.rating}</p>
          </span>
          <span className="w-full flex items-center gap-3 flex-wrap">
            <p>Hashtags : </p>
            <ul className="flex items-center gap-2">
              {data.genres.map((item: hashtagItem) => (
                <li
                  key={item.id}
                  className="text-[14px] text-gray-300 font-bold"
                >
                  #{item.name}
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
      <p>Description : {data.description}</p>
      <span className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4">
        <img
          src={`https://shikimori.one${data.screenshots[0]?.preview}`}
          alt=""
          className="w-full h-full rounded-md"
        />
        <img
          src={`https://shikimori.one${data.screenshots[1]?.preview}`}
          alt=""
          className="w-full h-full rounded-md"
        />
      </span>
      <span className="w-full h-full flex items-center flex-wrap gap-4">
        <iframe
          src={data.videos[0]?.player_url}
          width="100%"
          height="100%"
          className="sm:min-h-[400px] rounded-md"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          src={data.videos[1]?.player_url}
          width="100%"
          height="100%"
          className="sm:min-h-[400px] rounded-md"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </span>
      {/* <InfiniteMovingCardsComponent /> */}
      {/* <h2 className="text-3xl text-white font-bold">
        <TextGenerateEffect words={words} />
      </h2>
      <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-y-0">
        {data}
        <LoadMore />
      </section> */}
    </main>
  );
}

export default Page;
