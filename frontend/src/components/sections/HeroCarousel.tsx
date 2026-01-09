"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
import { carouselSlides } from "@/constants";

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mx-auto md:px-0"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className={`${slide.bgColor} rounded-xl overflow-hidden`}>
              <div className="flex flex-col md:flex-row items-center md:justify-between p-8 md:p-28 gap-6">
                <div className="flex-1 space-y-8 md:w-[60%] w-full">
                  <h2
                    className={`text-3xl md:text-6xl w-64 md:w-full font-semibold line-clamp-2 ${slide.textColor} text-balance`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`${slide.textColor} opacity-90 md:text-3xl text-lg  line-clamp-2`}
                  >
                    {slide.subtitle}
                  </p>
                  <Button
                    className={`${slide.buttonColor} text-white text-base md:text-lg rounded-full px-7 md:px-12 py-5 md:py-6 duration-300`}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
                <div className="md:w-[40%] w-full">
                  <div className="w-full md:h-[24rem] h-[16rem] relative">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
