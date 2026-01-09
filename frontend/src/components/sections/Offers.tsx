import { SaleCardCarousel } from "@/components/cards/SaleCardCarousel";
import { offers } from "@/constants";

export function Offers() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <SaleCardCarousel
            key={offer.id}
            deal={offer}
            date={offer.endDate}
            isStringDate={true}
          />
        ))}
      </div>
    </section>
  );
}
