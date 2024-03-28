import { TProducts } from "@/Types/type";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BabyFoods = async () => {
  const res = await fetch("http://localhost:5000/products?brand=baby-foods", {
    next: {
      revalidate: 30,
    },
  });
  const babyFoodData = await res.json();

  return (
    <Container>
      <h1 className="text-2xl font-semibold py-5">Baby Care Products</h1>
      <div className="grid md:grid-cols-3 gap-5 ">
        {babyFoodData.map((babyFoods: TProducts) => (
          <div
            key={babyFoods._id}
            className="card card-compact  bg-base-100 shadow-md"
          >
            <figure>
              <Image src={babyFoods.image} alt="Shoes" width={500} height={0} />
            </figure>
            <div className="card-body">
              <p className="pt-1 card-title">{babyFoods.name}</p>
              <p>Category: {babyFoods.category}</p>
              <div className=" flex justify-between items-center">
                <p className="text-slate-500">
                  <del>$400.00</del> ${babyFoods.price}
                </p>
                <Link href={`/products/baby-foods/${babyFoods._id}`}>
                  <div className="flex justify-center items-center  btn-xs bg-info text-white rounded-lg hover:bg-blue-300">
                    <p className="text-xs font-medium">Detail</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ps-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              <p className="absolute text-xs top-0 p-1 px-2 m-2 rounded bg-black text-white">
                {babyFoods.ratings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BabyFoods;