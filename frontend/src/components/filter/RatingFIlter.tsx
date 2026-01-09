"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const RATING_DATA = [
  { stars: 5, percentage: 100 },
  { stars: 4, percentage: 70 },
  { stars: 3, percentage: 50 },
  { stars: 2, percentage: 40 },
  { stars: 1, percentage: 25 },
];

export default function FilterRating() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeRating = searchParams.get("ratings") || "";

  const handleToggle = (rating: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeRating === rating) {
      params.delete("ratings");
    } else {
      params.set("ratings", rating);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full md:max-w-[300px] max-w-[270px] bg-white rounded-2xl md:border border-gray-100 md:p-6 p-4 mt-6">
      <h2 className="text-[18px] md:text-[22px] font-bold text-[#1A2138] mb-4">
        Filter by Rating
      </h2>

      <div className="w-full h-[1px] bg-gray-100 mb-6" />

      <div className="flex flex-col space-y-4">
        {RATING_DATA.map((item) => (
          <div key={item.stars} className="flex items-center gap-3 group">
            <Checkbox
              id={`rating-${item.stars}`}
              checked={activeRating === item.stars.toString()}
              onCheckedChange={() => handleToggle(item.stars.toString())}
              className="border-gray-200 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 data-[state=checked]:text-white"
            />

            <div className="flex-1 flex items-center gap-2">
              <Progress
                value={item.percentage}
                className="h-2 bg-gray-100 [&>div]:bg-emerald-500"
              />
              <div className="flex items-center gap-1 min-w-[32px]">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-gray-600">
                  {item.stars}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
