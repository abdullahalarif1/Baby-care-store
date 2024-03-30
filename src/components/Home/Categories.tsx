import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";
import { TProducts } from "@/Types/type";

const Categories = async () => {
  // const brandsCategoriesData = [
  //   {
  //     id: 1,
  //     name: "Formula Milk",
  //     image:
  //       "https://img.freepik.com/free-photo/father-s-day-celebration-with-pregnancy-test_23-2150231013.jpg?t=st=1711303167~exp=1711306767~hmac=4a94e0dfc22ed5fbdfaafa5aef8b670979621edd6f6468e936e253349f9e63fe&w=360",
  //     route: "baby-foods?category=formula-milk",
  //   },
  //   {
  //     id: 2,
  //     name: "Baby Cereals",
  //     image:
  //       "https://img.freepik.com/free-photo/top-view-delicious-bowls-milk-with-cereal_23-2148318474.jpg?t=st=1711303286~exp=1711306886~hmac=ea9be62a8e6637a57f19c7102eac76eb5a0440c2033e6c9740262ba7a4f7bef1&w=900",
  //     route: "baby-foods?category=baby-cereals",
  //   },
  //   {
  //     id: 3,
  //     name: "Baby Snacks",
  //     image:
  //       "https://img.freepik.com/free-photo/view-baby-food-arrangement_23-2148580370.jpg?t=st=1711300541~exp=1711304141~hmac=2e3e3fd499243df27df3d5e9523354eb6eac7e2ad037c34db59b62b18d8df62e&w=900",
  //     route: "baby-foods?category=baby-snacks",
  //   },
  //   {
  //     id: 4,
  //     name: "Baby Cloth",
  //     image:
  //       "https://img.freepik.com/free-photo/interior-kids-room-decoration-with-clothes_23-2149096031.jpg?t=st=1711302884~exp=1711306484~hmac=e3409705fe1817c1f89d377fe94ee890b509918875412dde94edd120e2f13a50&w=360",
  //     route: "diapers?category=pants",
  //   },
  //   // Add more brands/categories as needed
  // ];

  // // Accessing the first category data
  // const firstCategory = brandsCategoriesData[0];
  // const secondCategory = brandsCategoriesData[1];
  // const thirdCategory = brandsCategoriesData[2];
  // const fourthCategory = brandsCategoriesData[3];

  const res = await fetch(
    "https://baby-care-store-backend.vercel.app/products"
  );
  const brandsCategoriesData = await res.json();

  return (
    <Container>
      <div className="text-center pb-10 max-w-lg  mx-auto">
        <h2 className="text-4xl font-bold ">Top Categories</h2>
        <p className="pt-2 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo
          voluptatum omnis? Iure temporibus, voluptatibus libero ipsa qui fugit
          quia?
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 place-content-center">
        {brandsCategoriesData.map((brandCategory: TProducts) => (
          <div key={brandCategory._id}>
            <div className="bg-base-200 p-2 shadow-md hover:bg-slate-300 duration-700 ease-in-out rounded-lg">
              <Link
                href={`/${brandCategory.brand}?category=${brandCategory.category}`}
              >
                <div className="category-image">
                  <Image
                    src={brandCategory.image}
                    alt="category image"
                    className="pt-1"
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="category-name pt-1 font-semibold font-sm">
                  {brandCategory.name}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
