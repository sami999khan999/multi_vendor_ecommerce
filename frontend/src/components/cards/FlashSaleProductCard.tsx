import Image from "next/image";
import { Star } from "lucide-react";

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

  return (
    <div className="w-[255px] cursor-pointer rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative mb-4 h-50 w-full overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg font-bold text-primary-foreground">
          ${product.currentPrice.toFixed(2)}
        </span>
        <span className="text-sm text-muted-foreground line-through">
          ${product.oldPrice.toFixed(2)}
        </span>
      </div>
      <div className="mb-2 flex items-center gap-1">
        <Star size={16} fill="gold" stroke="gold" />
        <span className="text-sm text-primary-foreground">
          {product.rating.toFixed(1)}
        </span>
      </div>
      <h3 className="mb-1 text-base font-semibold text-primary-foreground h-12">
        {product.name}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">{product.brand}</p>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-red-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Sold: {product.sold}/{product.total}
      </p>
    </div>
  );
}
