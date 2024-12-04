"use client";

import axios from "axios";

import { useState, useEffect, useCallback } from "react";

interface Props {
  startScroll: number;
  color: string;
}

interface styles {
  display: "none" | "block";
  transform: string;
  opacity: number;
}

function easeIn(t: number) {
  return t * t;
}

function easeOut(t: number) {
  return t * (2 - t);
}

export default function MainSection({ startScroll, color }: Props) {
  const [mutableStyle, setMutableStyle] = useState<styles>({
    display: "none",
    transform: "tanslateY(-50px)",
    opacity: 0,
  });
  const [imageUrl, setImageUrl] = useState<string>("");

  const getImage = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM",
      );
      const data = res.data;
      localStorage.setItem(`BackgoundImageUrl${startScroll}`, data.urls.raw);
      setImageUrl(data.urls.raw);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const url = localStorage.getItem(`BackgoundImageUrl${startScroll}`);
    if (!url) {
      getImage();
    } else {
      setImageUrl(url);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY - startScroll;
      if (scrollY >= 200 && scrollY <= 3200) {
        if (scrollY < 1700) {
          setMutableStyle({
            display: "block",
            transform: `translateY(${-50 + easeOut((-200 + scrollY) / 1500) * 50}px)`,
            opacity: easeOut((-200 + scrollY) / 1500),
          });
        } else {
          setMutableStyle({
            display: "block",
            transform: `translateY(${easeIn((-1700 + scrollY) / 1500) * 50}px)`,
            opacity: 1 - easeIn((-1700 + scrollY) / 1500),
          });
        }
      } else {
        setMutableStyle({
          display: "none",
          transform: "tanslateY(50px)",
          opacity: 0,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[4800px]">
      <div
        className="sticky h-dvh top-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="p-[20px] bg-[#d3d3d33a] backdrop-blur-md"
            style={{
              ...mutableStyle,
            }}
          >
            <div className="text-4xl mb-4">Lorem ipsum</div>
            <div className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              laborum fugit, aut culpa est incidunt excepturi itaque, ex
              perferendis, cum aspernatur! Necessitatibus obcaecati amet in
              possimus odio esse quae harum!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
