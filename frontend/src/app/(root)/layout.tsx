import NavBar from "@/components/navbar/NavBar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  );
};

export default layout;
