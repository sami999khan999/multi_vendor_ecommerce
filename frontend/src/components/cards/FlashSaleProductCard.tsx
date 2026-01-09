import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

interface FlashSaleProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    image: string;
    currentPrice: number;
    oldPrice: number;
    rating: number;
    sold: number;
    total: number;
  };
}

export function FlashSaleProductCard({ product }: FlashSaleProductCardProps) {
  const progress = (product.sold / product.total) * 100;
  const [showTooltip, setShowTooltip] = useState(false);
  const isTitleTruncated = product.name.length > 15;

  // Dynamic width based on character length
  const getTitleWidth = () => {
    if (product.name.length <= 10) return "w-[60%]";
    if (product.name.length <= 20) return "w-[70%]";
    if (product.name.length <= 30) return "w-[80%]";
    return "w-[90%]";
  };

  return (
    <div className="cursor-pointer rounded-xl border bg-card p-4 transition-all hover:border-primary/30 duration-300 group">
      <div className="relative mb-4 h-50 w-full overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="md:text-lg text-base font-bold text-primary-foreground">
            ${product.currentPrice.toFixed(2)}
          </span>
          <span className="md:text-sm text-xs muted-foreground line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={16} fill="gold" stroke="gold" />
          <span className="text-sm text-primary-foreground">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <div className="relative">
          <h3
            className={`md:text-base text-sm font-semibold text-primary-foreground line-clamp-2 cursor-help ${getTitleWidth()}`}
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
        <p className="text-sm text-muted-foreground/70 font-medium">
          {product.brand}
        </p>
        <div className="space-y-2">
          <div className="h-1 w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-red-500/60"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs font-semibold">
            Sold: {product.sold}/{product.total}
          </p>
        </div>
      </div>
    </div>
  );
}
