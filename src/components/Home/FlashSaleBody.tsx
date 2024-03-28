"use client";
import { TFlashProduct } from "@/Types/type";
import Image from "next/image";


const FlashSaleBody = ({ flash }: {flash: TFlashProduct}) => {
  console.log(flash);
  return (
    <div key={flash._id} className="card card-compact  bg-base-100 shadow-md">
      <figure>
        <Image src={flash.image} alt="Shoes" width={500} height={300} />
      </figure>
      <div className="card-body">
        <p className="pt-1 card-title">{flash.name}</p>
        <div className=" flex justify-between items-center">
          <p className="text-slate-500">
            <del>$400.00</del> ${flash.price}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <p className="absolute text-xs top-0 p-1 px-2 m-2 rounded bg-black text-white">
          {flash.discount}
        </p>
      </div>
    </div>
  );
};

export default FlashSaleBody;
