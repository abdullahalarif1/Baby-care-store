import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:w-[90%] py-20 mx-auto">{children}</div>;
};

export default Container;
