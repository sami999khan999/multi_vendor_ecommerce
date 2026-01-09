import { topBrands } from "@/constants";
import TopBrandsCard from "../cards/TopBrandsCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CarouselButton } from "../ui/custom/CarouselButton";
import SectionTitle from "../ui/custom/SectionTitle";

const WeeklyTopBrands = () => {
  // Helper to chunk the brands array into pairs of 2
  const brandPairs = [];
  for (let i = 0; i < topBrands.length; i += 2) {
    brandPairs.push(topBrands.slice(i, i + 2));
  }

  return (
    <section className="w-full">
      <div className="mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-end mb-6 space-x-3">
            <SectionTitle>Weekly Top Brands</SectionTitle>
            <CarouselButton href="/brands" linkText="View All" />
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {brandPairs.map((pair, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
              >
                <div className="flex flex-col gap-2 md:gap-4">
                  {pair.map((brand, brandIndex) => (
                    <div key={brandIndex} className="h-full">
                      <TopBrandsCard brand={brand} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default WeeklyTopBrands;
