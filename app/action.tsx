"use server";

import { AnimeProp } from "@/components/AnimeCard";
import { AnimeCard3D } from "@/components/AnimeCard3D";

export const fetchAnimate = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard3D anime={item} index={index} key={item.id} />
  ));
};

export const fetchAnimateByID = async (ID: number) => {
  const response = await fetch(`https://shikimori.one/api/animes/${ID}`);

  const data = await response.json();

  return data;
};
