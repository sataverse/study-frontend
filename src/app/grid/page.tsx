"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type GridItemProps = {
  id: number;
  src: string;
  title: string;
  isBig: boolean;
};

type GameSimple = {
  id: number;
  title: string;
  rating: number;
  image: string;
};

function GridItem({ id, src, title, isBig }: GridItemProps) {
  return (
    <Link
      href={`/detail?id=${id}`}
      className={isBig ? "row-span-2 col-span-2" : ""}
    >
      <div className="square">
        <div className="w-full h-full overflow-hidden">
          <Image
            className="object-cover object-center hover:scale-105"
            src={src}
            alt={title}
            fill
          />
        </div>
      </div>
    </Link>
  );
}

export default function Grid() {
  const [gameData, setGameData] = useState<GameSimple[] | null>(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3030/boardgame/all/simple");
      setGameData(res.data.data);
    })();
  }, []);

  return (
    <div className="p-4px grid grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-1">
      {!gameData
        ? null
        : gameData.map((item) => (
            <GridItem
              key={item.id}
              id={item.id}
              src={item.image}
              title={item.title}
              isBig={item.rating >= 8.6}
            />
          ))}
    </div>
  );
}
