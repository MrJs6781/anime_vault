import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { AnimeCard3D } from "@/components/AnimeCard3D";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { fetchAnimate } from "./action";

async function Home() {
  const words = `Explore Anime For Watching`;
  const data = await fetchAnimate(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">
        <TextGenerateEffect words={words} />
      </h2>
      <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-y-0">
        {data}
        <LoadMore />
      </section>
    </main>
  );
}

export default Home;
