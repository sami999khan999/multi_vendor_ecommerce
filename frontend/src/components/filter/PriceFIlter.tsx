"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [range, setRange] = useState([
    Number(searchParams.get("min-price")) || 0,
    Number(searchParams.get("max-price")) || 10000,
  ]);

  const handleFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("min-price", range[0].toString());
    params.set("max-price", range[1].toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full md:max-w-[300px] max-w-[270px] bg-white rounded-2xl md:border border-gray-100 md:p-6 p-4 mt-6">
      {/* Title */}
      <h2 className="text-[18px] md:text-[22px] font-bold text-[#1A2138] mb-4">
        Filter by Price
      </h2>

      <div className="w-full h-[1px] bg-gray-100 mb-8" />

      {/* Slider Component */}
      <div className="px-2">
        <Slider
          defaultValue={[0, 10000]}
          max={10000}
          step={100}
          value={range}
          onValueChange={setRange}
          className="[&_[role=slider]]:border-emerald-500 [&_[role=slider]]:bg-white [&_.relative]:bg-emerald-500"
        />

        {/* Price Labels */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-gray-500">
            {range[0].toLocaleString()}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {range[1].toLocaleString()}
          </span>
        </div>
      </div>

      {/* Filter Button */}
      <Button
        onClick={handleFilter}
        variant="outline"
        className="mt-6 w-[100px] rounded-full border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all font-semibold"
      >
        Filter
      </Button>
    </div>
  );
}
