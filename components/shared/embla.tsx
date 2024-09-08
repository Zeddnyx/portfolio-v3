"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import style from "@/styles/embla.module.css";

type PropType = {
  options?: EmblaOptionsType;
  children: React.ReactNode;
};

export default function Embla({ options, children }: PropType) {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({delay: 8000})]);

  return (
    <section className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {children}
          {/* {slides.map((index) => ( */}
          {/*   <div className={style.embla__slide} key={index}> */}
          {/*     <div className={style.embla__slide__number}>{children}</div> */}
          {/*   </div> */}
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}
