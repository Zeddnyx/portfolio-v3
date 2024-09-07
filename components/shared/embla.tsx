"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import style from "@/styles/embla.module.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function Embla({ props }: { props: PropType }) {
  const { slides = [1, 2], options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {slides.map((index) => (
            <div className={style.embla__slide} key={index}>
              <div className={style.embla__slide__number}>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
