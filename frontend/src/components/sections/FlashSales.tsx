"use client";

import { sales } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FlashSaleCardCarousel } from "@/components/cards/FlashSaleCardCarousel";

export function FlashSales() {
  return (
    <section className="w-full mt-10">
      <div className="mx-auto px-4">
        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-4xl font-semibold text-foreground">
                Flash Sales
              </h2>
            </div>

            <div className="flex flex-col items-end mb-4">
              <div className="flex gap-2">
                <CarouselPrevious className="static h-10 w-10 border-gray-300 bg-transparent hover:bg-gray-200" />
                <CarouselNext className="static h-10 w-10 border-gray-300 bg-transparent hover:bg-gray-200" />
              </div>
              <a
                href="#"
                className="text-sm font-medium text-teal-600 hover:underline "
              >
                View All Deals
              </a>
            </div>
          </div>
          <CarouselContent className="-ml-4">
            {sales.map((sale, index) => (
              <CarouselItem key={index} className="pl-4 2xl:basis-1/2">
                <FlashSaleCardCarousel deal={sale} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
