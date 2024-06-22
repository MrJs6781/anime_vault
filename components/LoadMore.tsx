"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAnimate } from "@/app/action";
import { AnimeProp } from "./AnimeCard";

let page = 2;
export type AnimeProp2 = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp2[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnimate(page).then((res) => setData([...data, ...res]));
    }
  }, [inView, data]);

  return (
    <>
      {data}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
