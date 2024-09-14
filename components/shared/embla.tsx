"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./embla-dot";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import style from "@/styles/embla.module.css";

type PropType = {
  options?: EmblaOptionsType;
  children: React.ReactNode;
};

export default function Embla({ options, children }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 8000 }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
      <div className={style.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${style.embla__dot
              } !size-2 2xl:!size-3 rounded-xl hover:!bg-background c_transitions !bg-background ${index !== selectedIndex && "opacity-30"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
