"use client";

import { FlashSaleProductCard } from "@/components/cards/FlashSaleProductCard";
import { flashSaleProducts } from "@/constants";

export function FlashSalesProduct() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {flashSaleProducts.map((product) => (
            <FlashSaleProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
