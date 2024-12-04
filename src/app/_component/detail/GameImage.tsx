"use client";

import Image from "next/image";

type GameImageProps = {
  path: string;
  title: string;
  link: string;
};

export default function GameImage({ path, title, link }: GameImageProps) {
  return (
    <div className="relative w-full md:w-480px h-300px md:h-540px overflow-hidden shrink-0">
      <div
        className="absolute w-full h-full bg-cover bg-center blur-lg scale-125 z-[1]"
        style={{ backgroundImage: `url('${path}')` }}
      />
      <Image
        className="object-contain object-center z-[2]"
        src={path}
        alt={title}
        fill
      />
      <div
        className="ld-static shadow-sm bg-lightbg-0/75 dark:bg-darkbg-0/75 absolute p-4px bottom-20px left-1/2 -translate-x-1/2 rounded-full z-[3] cursor-pointer"
        onClick={() => window.open(link)}
      >
        {"YouTube"}
      </div>
    </div>
  );
}
