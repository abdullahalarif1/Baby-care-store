import Image from "next/image";
import React from "react";
import frame from "../../../public/Frame 172.png";

const Frame = () => {
  return (
    <div className="bg-base-200 py-20 ">
      <Image src={frame} alt="frame" className="mx-auto" />
    </div>
  );
};

export default Frame;
