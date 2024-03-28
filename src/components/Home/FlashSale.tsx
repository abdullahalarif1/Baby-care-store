import { TFlashProduct } from "@/Types/type";
import Container from "../Container";
import FlashSaleBody from "./FlashSaleBody";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const flashesData = await res.json();

  // Sort the flashes based on product creation time
  const sortedFlashes = flashesData.sort(
    (a: TFlashProduct, b: TFlashProduct) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Filter flash sale products based on the flashSale property
  const flashSaleProducts = sortedFlashes.filter(
    (flash: TFlashProduct) => flash.flashSale
  );

  return (
    <Container>
      <div className="flex justify-between pb-5">
        <h1 className="text-3xl font-semibold">Flash Sale</h1>
        <Link href="/flash-sale">
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
        {/* Display top 4-6 flash sale baby care products */}
        {flashSaleProducts
          .slice(0, Math.min(flashSaleProducts.length, 6))
          .map((flash: TFlashProduct) => (
            <FlashSaleBody flash={flash} key={flash._id} />
          ))}
      </div>
    </Container>
  );
};

export default FlashSale;
