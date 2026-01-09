"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
}

export default function ProductCard({
  product,
}: {
  product: ProductCardProps;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const isTitleTruncated = product.name.length > 15; // Adjust threshold as needed

  // Dynamic width based on character length
  const getTitleWidth = () => {
    if (product.name.length <= 10) return "w-[60%]";
    if (product.name.length <= 20) return "w-[70%]";
    if (product.name.length <= 30) return "w-[80%]";
    return "w-[90%]";
  };

  return (
    <div className="bg-white rounded-xl border border-border p-2 sm:p-4 flex flex-col w-full h-full transition-shadow hover:shadow-sm">
      <div className="relative w-full h-32 sm:h-60 mb-2 sm:mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div>
        <div className="flex-1">
          <div className="relative">
            <h3
              className={`text-sm sm:text-base font-semibold text-foreground mb-0.5 sm:mb-1 line-clamp-2 cursor-help ${getTitleWidth()}`}
              onMouseEnter={() => isTitleTruncated && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {product.name}
            </h3>

            {/* Tooltip */}
            {showTooltip && isTitleTruncated && (
              <div className="absolute z-50 left-0 right-0 top-full mt-1 px-3 py-2 bg-gray-600 text-white text-xs rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="font-medium text-wrap break-words">
                  {product.name}
                </div>
                <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-600 transform rotate-45"></div>
              </div>
            )}
          </div>

          <p className="text-[10px] sm:text-sm text-gray-500 mb-2 sm:mb-4">
            {product.category}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
          <p className="text-sm sm:text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
            <span className="text-[10px] sm:text-sm text-gray-600 ml-1">
              {product.rating}
            </span>
          </div>
        </div>

        <Button className="bg-green-50 text-primary text-xs sm:text-sm border border-green-200 w-full h-8 sm:h-10 rounded-full hover:bg-primary hover:text-white transition-colors mt-auto">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
