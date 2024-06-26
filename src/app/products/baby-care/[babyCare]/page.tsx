import { TProducts } from "@/Types/type";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

interface TProduct {
  params: {
    babyCare: string;
  };
}

const BabyCareDetail = async ({ params }: TProduct) => {
  console.log(params);
  const res = await fetch(
    `https://baby-care-store-backend.vercel.app/products/${params.babyCare}
`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return (
    <Container>
      <div className="py-20">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image src={data.image} alt="Album" width={700} height={300} />
          </figure>
          <div className=" p-10 ">
            <h2 className="card-title text-xl font-semibold">{data.name}</h2>
            <h4 className="font-medium py-2">Category: {data.category}</h4>
            <h4 className=" py-1">Brand: {data.brand}</h4>
            <p className=" py-1">Price: {data.price}</p>
            <p className="">Ratings: {data.ratings}</p>
            <p className="text-sm pt-2">{data.description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BabyCareDetail;
