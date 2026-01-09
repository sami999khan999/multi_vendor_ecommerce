"use client";

import { SIDEBAR_CATEGORIES } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronUp, Loader2, Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface CategorySidebarProps {
  activeCategory?: string;
  onCategoryChange?: (slug: string) => void;
}

export default function CategoryFilter({
  activeCategory = "honey",
  onCategoryChange,
}: CategorySidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const PAGE_SIZE = 5;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const currentCategory = searchParams.get("category") || activeCategory;
  const [optimisticCategory, setOptimisticCategory] = useState(currentCategory);

  useEffect(() => {
    setOptimisticCategory(currentCategory);
  }, [currentCategory]);

  const visibleCategories = SIDEBAR_CATEGORIES.slice(0, visibleCount);
  const hasMore = visibleCount < SIDEBAR_CATEGORIES.length;

  const handleCategoryChange = (slug: string) => {
    setOptimisticCategory(slug);
    if (onCategoryChange) onCategoryChange(slug);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (slug === activeCategory) {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  const fetchMoreFromDB = async () => {
    setIsLoadingMore(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setVisibleCount((prev) =>
      Math.min(prev + PAGE_SIZE, SIDEBAR_CATEGORIES.length)
    );
    setIsLoadingMore(false);
  };

  return (
    <div className="w-full md:max-w-[300px] max-w-[270px] bg-white rounded-2xl md:border border-gray-100 md:p-6 p-4">
      <h2 className="text-[18px] md:text-[22px] font-bold text-[#1A2138] mb-4">
        Browse by Category
      </h2>

      <div className="w-full h-[1px] bg-gray-100 mb-6" />

      <nav className="flex flex-col space-y-4 md:space-y-5">
        {visibleCategories.map((category) => {
          const isActive = optimisticCategory === category.slug;
          return (
            <button
              key={category.slug}
              disabled={isPending}
              onClick={() => handleCategoryChange(category.slug)}
              className={cn(
                "flex items-center text-left transition-all duration-200 group",
                isActive
                  ? "text-emerald-600"
                  : "text-[#1A2138] hover:text-emerald-500",
                isPending && "cursor-not-allowed opacity-50"
              )}
            >
              <span className="text-sm md:text-[17px] font-semibold flex-1">
                {category.name}
              </span>
              <span
                className={cn(
                  "text-sm md:text-[17px] font-normal ml-2 transition-colors",
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-400 group-hover:text-emerald-400"
                )}
              >
                ({category.count})
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-8 pt-4 border-t border-dashed border-gray-100 flex flex-col gap-3">
        {hasMore && (
          <button
            onClick={fetchMoreFromDB}
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
            {isLoadingMore ? "Loading Categories..." : "Show More"}
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
