import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { brands } from "@/constants";
import Image from "next/image";
import { CarouselButton } from "../ui/custom/CarouselButton";
import SectionTitle from "../ui/custom/SectionTitle";

const TopSellers = () => {
  return (
    <section className="w-full max-w-full overflow-hidden">
      <div className="bg-accent rounded-xl p-6 md:p-10 w-full">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div className="mb-8 flex items-end justify-between space-x-3">
            <SectionTitle>Shop By Brands</SectionTitle>
            <CarouselButton />
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 2xl:basis-[12.5%]"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative h-20 w-20 md:h-32 md:w-32 overflow-hidden rounded-full bg-white shrink-0">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <span className="text-xs md:text-lg font-medium text-foreground text-center line-clamp-1">
                    {brand.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TopSellers;
