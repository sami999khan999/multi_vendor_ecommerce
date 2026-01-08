import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Ghorer Bazar", logo: "/assets/brands/brand-1.png" },
  { name: "Karkuma", logo: "/assets/brands/brand-2.png" },
  { name: "Naturo", logo: "/assets/brands/brand-3.png" },
  { name: "Acure Bd", logo: "/assets/brands/brand-1.png" },
  { name: "Khaas Food", logo: "/assets/brands/brand-2.png" },
  { name: "Panash Food", logo: "/assets/brands/brand-3.png" },
  { name: "Ecory", logo: "/assets/brands/brand-1.png" },
  { name: "Bonobhumi", logo: "/assets/brands/brand-2.png" },
  { name: "Bonobhumi", logo: "/assets/brands/brand-3.png" },
  { name: "Bonobhumi", logo: "/assets/brands/brand-1.png" },
  { name: "Bonobhumi", logo: "/assets/brands/brand-2.png" },
];

const TopSellers = () => {
  return (
    <section className="w-full py-8">
      <div className="bg-accent rounded-xl p-6 md:p-10">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          {/* Header Section */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="md:text-4xl text-2xl font-semibold text-foreground">
                Shop by Brands
              </h2>
            </div>

            {/* Manual Navigation Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-primary hover:underline font-medium"
              >
                View All
              </Link>
              <div className="flex gap-2 relative">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 border-gray-200" />
                <CarouselNext className="static translate-y-0 h-12 w-12 border-gray-200" />
              </div>
            </div>
          </div>

          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/8"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative h-20 w-20 md:h-32 md:w-32 overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-xs md:text-lg font-medium text-foreground text-center">
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
