import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      image: "/assets/features/home.png",
      title: "Home Delivery",
      description: "All over the Bangladesh",
    },
    {
      image: "/assets/features/samisfaction.png",
      title: "100% Satisfaction",
      description: "Guaranteed quality you can trust.",
    },
    {
      image: "/assets/features/cash-on-dellivery.png",
      title: "Cash on Delivery",
      description: "Pay easily at your doorstep.",
    },
    {
      image: "/assets/features/customer-support.png",
      title: "24/7 Support",
      description: "We are here whenever you need us.",
    },
  ];

  return (
    <section className="py-12 bg-white cursor-pointer">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-[#F1FDF7] rounded-2xl border border-transparent hover:border-emerald-100 transition-colors space-x-4"
          >
            {/* Icon Circle */}
            <div className="w-14 h-14 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-600 ">
              <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h3 className="text-emerald-700 font-semibold text-lg leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
