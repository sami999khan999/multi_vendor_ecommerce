"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ChevronUp, Loader2, Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

const BRAND_DATA = [
  { name: "Organic Nutrition Ltd", slug: "organic-nutrition" },
  { name: "Aseel Food", slug: "aseel-food" },
  { name: "BD Foods Ltd", slug: "bd-foods" },
  { name: "Khaas Food", slug: "khaas-food" },
  { name: "Falaq Food", slug: "falaq-food" },
  { name: "Ghorer Bazar", slug: "ghorer-bazar" },
  { name: "Green Harvest", slug: "green-harvest" },
  { name: "Pure Nature", slug: "pure-nature" },
];

export default function BrandFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const PAGE_SIZE = 5;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const activeBrands = searchParams.get("brands")?.split(",") || [];

  const handleBrandToggle = (slug: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      let newBrands = [...activeBrands];

      if (newBrands.includes(slug)) {
        newBrands = newBrands.filter((b) => b !== slug);
      } else {
        newBrands.push(slug);
      }

      if (newBrands.length > 0) {
        params.set("brands", newBrands.join(","));
      } else {
        params.delete("brands");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  const fetchMoreBrands = async () => {
    setIsLoadingMore(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, BRAND_DATA.length));
    setIsLoadingMore(false);
  };

  const visibleBrands = BRAND_DATA.slice(0, visibleCount);
  const hasMore = visibleCount < BRAND_DATA.length;

  return (
    <div className="w-full md:max-w-[300px] max-w-[270px] bg-white rounded-2xl md:border border-gray-100 md:p-6 p-4 mt-6">
      <h2 className="text-[18px] md:text-[22px] font-bold text-[#1A2138] mb-4">
        Filter by Brand
      </h2>

      <div className="w-full h-[1px] bg-gray-100 mb-6" />

      <div className="flex flex-col space-y-4">
        {visibleBrands.map((brand) => (
          <div
            key={brand.slug}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <Checkbox
              id={brand.slug}
              checked={activeBrands.includes(brand.slug)}
              onCheckedChange={() => handleBrandToggle(brand.slug)}
              className="border-gray-200 data-[state=checked]:bg-primary data-[state=checked]:border-emerald-600 text-background data-[state=checked]:text-white"
            />
            <label
              htmlFor={brand.slug}
              className={cn(
                "text-sm md:text-[17px] font-semibold cursor-pointer transition-colors flex-1",
                activeBrands.includes(brand.slug)
                  ? "text-emerald-600"
                  : "text-[#1A2138] group-hover:text-emerald-500"
              )}
            >
              {brand.name}
            </label>
          </div>
        ))}
      </div>

      {/* --- Action Buttons Section --- */}
      <div className="mt-8 pt-4 border-t border-dashed border-gray-100 flex flex-col gap-3">
        {hasMore && (
          <button
            onClick={fetchMoreBrands}
            disabled={isLoadingMore}
            className={cn(
              "group flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 transition-all font-bold text-sm",
              isLoadingMore
                ? "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed"
                : "border-emerald-50 bg-emerald-50/30 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
            )}
          >
            {isLoadingMore ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
            )}
            {isLoadingMore ? "Loading Brands..." : "Show More"}
          </button>
        )}

        {visibleCount > PAGE_SIZE && (
          <button
            onClick={() => setVisibleCount(PAGE_SIZE)}
            className="flex items-center justify-center gap-1.5 text-gray-400 hover:text-rose-500 font-semibold text-xs transition-colors py-1"
          >
            <ChevronUp className="h-3.5 w-3.5" />
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
