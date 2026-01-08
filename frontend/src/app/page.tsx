import { FlashSales } from "@/components/sections/FlashSales";
import { FlashSalesProduct } from "@/components/sections/FlashSalesProduct";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ProductCategories from "@/components/sections/ProductCategories";
import TopSellers from "@/components/sections/TopSellers";

export const page = () => {
  return (
    <div className="space-y-6 py-6 lg:px-0 px-2">
      <HeroCarousel />
      <ProductCategories />
      <FlashSales />
      <FlashSalesProduct />
      <TopSellers />
    </div>
  );
};

export default page;
