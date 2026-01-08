"use client";

import Image from "next/image";

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
    <div className="flex flex-col items-center space-y-3 p-4">
      <div className="bg-secondary-foreground h-[140px] w-35 shrink-0 rounded-full flex items-center justify-center hover:bg-secondary5 transition-colors duration-300 cursor-pointer group">
        <Image
          src={category.image}
          alt={category.name}
          width={60}
          height={60}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-center text-lg font-semibold text-foreground">
        {category.name}
      </p>
      <p className="text-center text-sm text-foreground/70">
        {category.products}
      </p>
    </div>
  );
}
