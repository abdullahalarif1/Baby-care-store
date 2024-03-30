import { TProducts } from "@/Types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = async () => {
  const res = await fetch(
    "https://baby-care-store-backend.vercel.app/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const productsData = await res.json();
  const sortedProducts = productsData.sort(
    (a: TProducts, b: TProducts) => b.ratings - a.ratings
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center py-20">
        {/* Page content here */}
        <div className="overflow-x-auto bg-base-200 p-10 rounded-md">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {sortedProducts.map((product: TProducts) => (
                <tr key={product._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={product.image}
                            alt="Avatar Tailwind CSS Component"
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>${product.price}</td>
                  <td>{product.ratings}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content md:pt-20">
          {/* Sidebar content here */}
          <li className="font-medium">
            <Link href="/dashboard">All Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
