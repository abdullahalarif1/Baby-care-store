import React, { useEffect, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { TProducts } from "@/Types/type";
import TrendingProductBoady from "./TrendingProductBoady";

const TrendingProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  // Sort products by ratings in descending order
  const products = data.sort(
    (a: TProducts, b: TProducts) => b.ratings - a.ratings
  );

  return (
    <Container>
      <div className="flex justify-between items-center pb-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold ">Popular Products</h1>
          <p className="text-slate-500 text-sm pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi
            debitis ea dolorum architecto laudantium magni, inventore eius
            ducimus in?
          </p>
        </div>
        <Link href="/products">
          <button className="btn btn-info rounded-box text-white">
            View All{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {/* Display top 4-6 e products */}
        {products.slice(0, 4).map((product: TProducts) => (
          <TrendingProductBoady product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default TrendingProducts;
