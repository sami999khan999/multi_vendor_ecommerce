import Breadcrumb from "@/components/ui/custom/Breadcrumb";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="lg:mt-32 mt-16 space-y-8">
      <Breadcrumb />
      <div className="px-2">{children}</div>
    </section>
  );
};

export default layout;
