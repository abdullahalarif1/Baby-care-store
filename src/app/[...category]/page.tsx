import { TFlashProduct, TProducts } from "@/Types/type";
import Container from "@/components/Container";
import Image from "next/image";

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: TProducts;
}) => {
  const res = await fetch(
    `http://localhost:5000/products?category=${searchParams.category}`
  );
  const productCategory = await res.json();

  return (
    <Container>
      <div className="mx-auto py-10">
        <h1 className="text-3xl font-bold ">All Products</h1>
        <p className="text-4xl text-center font-bold">
          Category: {searchParams.category}
        </p>
        <div>
          {productCategory.map((cat: TProducts) => (
            <div
              key={cat._id}
              className="card card-compact py-10 bg-base-100 shadow-md"
            >
              <figure>
                <Image src={cat.image} alt="Shoes" width={500} height={500} />
              </figure>
              <div className="card-body">
                <p className="pt-1 card-title">{cat.name}</p>
                <p className="text-lg pb-1">category: {cat.category}</p>
                <p className="text-slate-500 text-sm">{cat.description}</p>

                <p className="text-slate-500 pt-1">
                  <del>$30.00</del> ${cat.price}
                </p>
                <p className="">Ratings: {cat.ratings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllProductsPage;
