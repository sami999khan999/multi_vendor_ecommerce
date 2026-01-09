import NavBar from "@/components/navigation/NavBar";
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
