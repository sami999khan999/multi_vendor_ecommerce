import { BestSellingProducts } from "@/components/sections/BestSellingProduct";
import FeaturesSection from "@/components/sections/Features";
import { FlashSales } from "@/components/sections/FlashSales";
import { FlashSalesProduct } from "@/components/sections/FlashSalesProduct";
import Footer from "@/components/sections/Footer";
import HeroCarousel from "@/components/sections/HeroCarousel";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { Offers } from "@/components/sections/Offers";
import ProductCategories from "@/components/sections/ProductCategories";
import RecomendedProducts from "@/components/sections/RecomendedProducts";
import Subscribe from "@/components/sections/Subscribe";
import TopSellers from "@/components/sections/TopSellers";
import { TrendingProducts } from "@/components/sections/TrendingProducts";
import WeeklyTopBrands from "@/components/sections/WeeklyTopBrands";

export const page = () => {
  return (
    <div className="space-y-6 md:mt-[10rem] mt-[5.5rem]">
      <div className="container px-2 space-y-5 md:space-y-8 md:mt-8 mt-5">
        <HeroCarousel />
        <ProductCategories />
        <FlashSales />
        <FlashSalesProduct />
        <TopSellers />
        <NewArrivals />
        <Offers />
        <BestSellingProducts />
        <WeeklyTopBrands />
        <TrendingProducts />
        <FeaturesSection />
      </div>
      <RecomendedProducts />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default page;
