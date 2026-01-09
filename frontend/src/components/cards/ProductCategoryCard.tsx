"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCategory {
  name: string;
  products: string;
  image: string;
}

interface ProductCategoryCardProps {
  category: ProductCategory;
}

export function ProductCategoryCard({ category }: ProductCategoryCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-4">
      {/* Mobile: w-20 h-20 (80px)
          Desktop: md:w-32 md:h-32 or md:h-[140px] 
      */}
      <div
        className={cn(
          "bg-secondary-foreground rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer group",
          "h-20 w-20 md:h-[140px] md:w-[140px] shrink-0", // Responsive sizing
          "hover:bg-secondary/80" // Corrected secondary color naming
        )}
      >
        <div className="relative h-10 w-10 md:h-[60px] md:w-[60px]">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="space-y-0.5 md:space-y-1">
        <p className="text-center text-sm md:text-lg font-semibold text-foreground line-clamp-1">
          {category.name}
        </p>
        <p className="text-center text-[10px] md:text-sm text-foreground/70">
          {category.products}
        </p>
      </div>
    </div>
  );
}
