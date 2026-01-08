"use client";

import { FlashSaleProductCard } from "@/components/cards/FlashSaleProductCard";

// Sample product data
const flashSaleProducts = [
  {
    id: 1,
    name: "C-500 Antioxidant Protect Dietary Supplement",
    brand: "Brand Name",
    image: "/assets/product/product-1.png",
    currentPrice: 14.99,
    oldPrice: 16.99,
    rating: 4.8,
    sold: 18,
    total: 40,
  },
  {
    id: 2,
    name: "Vitamin D3 Immune Support",
    brand: "Health Plus",
    image: "/assets/product/product-2.png",
    currentPrice: 22.5,
    oldPrice: 29.99,
    rating: 4.6,
    sold: 25,
    total: 50,
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil Supplement",
    brand: "Nature's Best",
    image: "/assets/product/product-3.png",
    currentPrice: 18.75,
    oldPrice: 24.99,
    rating: 4.9,
    sold: 32,
    total: 60,
  },
  {
    id: 4,
    name: "Probiotic Digestive Health",
    brand: "Gut Health Co",
    image: "/assets/product/product-4.png",
    currentPrice: 31.99,
    oldPrice: 39.99,
    rating: 4.7,
    sold: 15,
    total: 35,
  },
  {
    id: 5,
    name: "Multivitamin Daily Complete",
    brand: "VitaLife",
    image: "/assets/product/product-5.png",
    currentPrice: 19.99,
    oldPrice: 27.99,
    rating: 4.5,
    sold: 28,
    total: 45,
  },
  {
    id: 6,
    name: "Multivitamin Daily Complete",
    brand: "VitaLife",
    image: "/assets/product/product-5.png",
    currentPrice: 19.99,
    oldPrice: 27.99,
    rating: 4.5,
    sold: 28,
    total: 45,
  },
];

export function FlashSalesProduct() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
          {flashSaleProducts.map((product) => (
            <FlashSaleProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
