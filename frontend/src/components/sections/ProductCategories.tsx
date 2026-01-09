"use client";

import { productCategories } from "@/constants";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ProductCategoryCard } from "@/components/cards/ProductCategoryCard";

const ProductCategories = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mx-auto"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {productCategories.map((category, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 lg:basis-1/5 2xl:basis-1/10 xl:basis-1/8"
              >
                <ProductCategoryCard category={category} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCategories;
