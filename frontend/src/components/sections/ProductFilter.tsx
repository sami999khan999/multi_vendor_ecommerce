"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";
import CategoryFilter from "../filter/CategoryFilter";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import BrandFilter from "../filter/BrandFilter";
import PriceFilter from "../filter/PriceFIlter";
import DiscountFilter from "../filter/DiscountFilter";
import FilterRating from "../filter/RatingFIlter";

const ProductFilter = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <CategoryFilter />
        <BrandFilter />
        <PriceFilter />
        <DiscountFilter />
        <FilterRating />
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 mb-4"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter Products
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] overflow-y-auto">
            <SheetHeader className="text-left">
              <SheetTitle className="text-xl font-bold">Filters</SheetTitle>
            </SheetHeader>
            <div className="pb-8 flex items-center justify-center w-full">
              <CategoryFilter />
              <BrandFilter />
              <PriceFilter />
              <DiscountFilter />
              <FilterRating />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProductFilter;
