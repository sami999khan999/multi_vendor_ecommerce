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
      className="w-full  mx-auto px-4 md:px-0"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className={`${slide.bgColor} rounded-xl overflow-hidden`}>
              <div className="flex flex-col md:flex-row items-center justify-between p-8 md:py-20 md:px-20 gap-6">
                <div className="flex-1 space-y-8">
                  <h2
                    className={`text-3xl md:text-6xl font-semibold line-clamp-2 ${slide.textColor} text-balance`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`${slide.textColor} opacity-80 md:text-2xl text-lg max-w-md line-clamp-2`}
                  >
                    {slide.subtitle}
                  </p>
                  <Button
                    className={`${slide.buttonColor} text-white text-lg font-medium rounded-full px-10 py-6 duration-300`}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={600}
                    height={600}
                    className="max-h-62.5 md:max-h-75 object-contain"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
