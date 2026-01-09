import Image from "next/image";
import { Button } from "../ui/button";

interface TopBrandsCardProps {
  brand: {
    id: number;
    name: string;
    products: number;
    productImages: string[];
    bgColor: string;
  };
}

const TopBrandsCard = ({ brand }: TopBrandsCardProps) => {
  return (
    <div
      className="rounded-xl p-6 flex flex-col items-center text-center w-full space-y-5"
      style={{ backgroundColor: brand.bgColor }}
    >
      <h3 className="md:text-2xl text-xl font-semibold text-gray-800 line-clamp-1 cursor-pointer">
        {brand.name}
      </h3>
      <p className="md:text-base text-sm text-muted-foreground/70 font-medium line-clamp-1 cursor-pointer">
        {brand.products} Products
      </p>

      <div className="flex gap-2">
        {brand.productImages.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className="md:w-16 md:h-16 w-12 h-12 rounded-full relative overflow-hidden shrink-0 bg-background"
          >
            <Image
              src={image}
              alt={`${brand.name} product ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 duration-300"
            />
          </div>
        ))}
      </div>

      <Button className="bg-white text-primary hover:bg-green-50 hover:border hover:border-green-200 py-3 rounded-full font-medium w-fit px-6">
        View Brand Store
      </Button>
    </div>
  );
};

export default TopBrandsCard;
