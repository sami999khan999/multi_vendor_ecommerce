import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { products, sales } from "@/constants";
import ProductCard from "../cards/ProductCard";
import { CarouselButton } from "../ui/custom/CarouselButton";
import SectionTitle from "../ui/custom/SectionTitle";

export function NewArrivals() {
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
            <SectionTitle>New Arrivals</SectionTitle>

            <CarouselButton href="/flash-sales" linkText="View All" />
          </div>
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-4 2xl:basis-1/6 basis-1/2"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
