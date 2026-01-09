"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition, useMemo } from "react"; // Added useTransition for smoother handling
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionTitle from "../ui/custom/SectionTitle";
import { cn } from "@/lib/utils";
import { productCategories, products } from "@/constants";
import ProductCard from "../cards/ProductCard";

const categories = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Electronics", slug: "electronics" },
  { id: 3, name: "Clothing", slug: "clothing" },
  { id: 4, name: "Shoes", slug: "shoes" },
  { id: 5, name: "Accessories", slug: "accessories" },
  { id: 6, name: "Toys & Baby Products", slug: "toys-baby" },
  { id: 7, name: "Mobile & Computer", slug: "mobile-computer" },
];

const RecomendedProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentCategory = searchParams.get("category") || "all";
  const [optimisticCategory, setOptimisticCategory] = useState(currentCategory);

  useEffect(() => {
    setOptimisticCategory(currentCategory);
  }, [currentCategory]);

  const handleCategoryChange = (slug: string) => {
    setOptimisticCategory(slug);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (slug === "all") {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  const filteredProducts = useMemo(() => {
    if (optimisticCategory === "all") {
      return products.slice(0, 18);
    }

    const categoryMap: { [key: string]: string } = {
      electronics: "Electronics",
      clothing: "Clothing",
      shoes: "Shoes",
      accessories: "Accessories",
      "toys-baby": "Toys & Baby Products",
      "mobile-computer": "Mobile & Computer",
    };

    const categoryName = categoryMap[optimisticCategory];
    const filtered = products.filter(
      (product) => product.category === categoryName
    );

    return filtered.slice(0, 18);
  }, [optimisticCategory]);

  return (
    <section className="space-y-8 bg-sidebar-accent md:py-12 py-6 px-2">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <SectionTitle className="text-center md:text-left">
            Recommended Products
          </SectionTitle>
          <nav className="items-center gap-2 flex flex-wrap justify-center">
            {categories.map((cat) => {
              const isActive = optimisticCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  disabled={isPending}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={cn(
                    "md:px-5 px-2 py-2 rounded-full text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-background shadow-sm"
                      : "text-muted-foreground/70 hover:bg-secondary hover:text-foreground",
                    isPending && "cursor-not-allowed"
                  )}
                >
                  {cat.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div
          className={cn(
            "py-10 transition-opacity duration-300 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4",
            isPending ? "opacity-50" : "opacity-100"
          )}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecomendedProducts;
