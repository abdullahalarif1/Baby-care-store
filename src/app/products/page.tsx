"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TProducts } from "@/Types/type";
import Container from "@/components/Container";
import Image from "next/image";

const Products = () => {
  const [products, setProducts] = useState<TProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProducts[]>([]);
  const [filters, setFilters] = useState<{
    ratings: number;
    brand: string | null; // Allow string or null
    priceRange: [number, number];
  }>({
    ratings: 0,
    brand: null, // Initialize with null
    priceRange: [0, Infinity],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://baby-care-store-backend.vercel.app/products",
          {
            next: {
              revalidate: 30,
            },
          }
        );
        const data = await res.json();
        const sortedProducts = data.sort(
          (a: TProducts, b: TProducts) => b.ratings - a.ratings
        );
        setProducts(sortedProducts);
        applyFilters(sortedProducts, filters);
      } catch (error) {
        console.error("Error fetching flash sale data:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters(products, filters);
  }, [filters]);

  const applyFilters = (products: TProducts[], filters: any) => {
    const filtered = products.filter((product) => {
      return (
        product.ratings >= filters.ratings &&
        (!filters.brand || product.brand === filters.brand) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
      );
    });
    setFilteredProducts(filtered);
  };

  const handleRatingChange = (ratings: number) => {
    setFilters({ ...filters, ratings });
  };

  const handleCategoryChange = (brand: string) => {
    setFilters({ ...filters, brand });
  };

  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    setFilters({ ...filters, priceRange: [minPrice, maxPrice] });
  };

  return (
    <Container>
      <div className="mb-5 mt-5">
        <div className="flex flex-col justify-center gap-2 items-center md:flex md:justify-end md:items-center md:flex-row space-x-4">
          <div>
            <details className="dropdown ">
              <summary className="m-1 btn-info btn text-white">
                Brand / Category
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box bg-base-200 w-52">
                <li>
                  <Link href="/products/baby-foods">Baby Foods</Link>
                </li>
                <li>
                  <Link href="/products/baby-care">Baby Care</Link>
                </li>
                <li>
                  <Link href="/products/diapers">Diapers</Link>
                </li>
              </ul>
            </details>
          </div>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              className="grow"
              placeholder="Minimum Rating"
              // value={filters.ratings}
              onChange={(e) => handleRatingChange(parseInt(e.target.value))}
            />
          </label>
          <select
            className="select select-bordered"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="baby-foods">Baby Foods</option>
            <option value="baby-care">Baby Care</option>
            <option value="diapers">Diapers</option>
          </select>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              className="grow"
              placeholder="Min Price"
              onChange={(e) =>
                handlePriceRangeChange(
                  parseInt(e.target.value),
                  filters.priceRange[1]
                )
              }
            />
            <input
              type="number"
              className="grow"
              placeholder="Max Price"
              onChange={(e) =>
                handlePriceRangeChange(
                  filters.priceRange[0],
                  parseInt(e.target.value)
                )
              }
            />
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {/* Display filtered products */}
        {filteredProducts.map((product: TProducts) => (
          <div
            key={product._id}
            className="card card-compact  bg-base-100 shadow-md"
          >
            <figure>
              <Image src={product.image} alt="Shoes" width={500} height={300} />
            </figure>
            <div className="card-body">
              <p className="pt-1 card-title">{product.name}</p>
              <div className=" flex justify-between items-center">
                <p className="text-slate-500">
                  <del>$400.00</del> ${product.price}
                </p>
                <Link href={`/products/${product._id}`}>
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
                {product.ratings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
