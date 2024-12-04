"use client";

import RoundAccordion from "@/app/_component/detail/RoundAccordion";
import GameImage from "@/app/_component/detail/GameImage";
import GameIntro from "@/app/_component/detail/GameIntro";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type GameDetail = {
  title: string;
  year: number;
  introduction: string;
  rating: number;
  weight: number;
  player: [number, number];
  time: number;
  image: string;
  youtube: string;
};

export default function Detail() {
  const [detailData, setDetailData] = useState<GameDetail | null>(null);
  const params = useSearchParams();

  useEffect(() => {
    const id = params.get("id");
    (async () => {
      const res = await axios.get(
        `http://localhost:3030/boardgame/all/detail?id=${id}`,
      );
      setDetailData(res.data.data);
    })();
  }, []);

  return (
    <div className="ld-static fixed center shadow-light dark:shadow-dark w-[90%] lg:w-922px h-540px rounded-8px z-[99] overflow-hidden">
      {!detailData ? null : (
        <RoundAccordion
          rating={detailData.rating}
          weight={detailData.weight}
          player={detailData.player}
          time={detailData.time}
        />
      )}
      {!detailData ? null : (
        <div className="flex flex-col md:flex-row">
          <GameImage
            path={detailData.image}
            title={detailData.title}
            link={detailData.youtube}
          />
          <GameIntro
            title={detailData.title}
            year={detailData.year}
            introduction={detailData.introduction}
          />
        </div>
      )}
    </div>
  );
}
