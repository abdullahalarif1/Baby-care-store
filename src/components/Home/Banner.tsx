import Image from "next/image";
import React from "react";

const Banner = () => {
  const babyProductData = [
    {
      name: "Baby Bath Set",
      image:
        "https://img.freepik.com/free-photo/bath-cleaning-products-with-copy-space_23-2148439100.jpg",
      text: "Discover a World of Comfort, Safety, and Joy for Your Little Ones.",
      price: 200.00,
      discount: "-13%",
    },
    {
      name: "Baby Skincare Essentials",
      image:
        "https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817672.jpg?size=626&ext=jpg&ga=GA1.1.1097796274.1711213236&semt=ais",
      text: "Shop the Latest Trends in Baby Care Products.",
      price: 300.00,
      discount: "-13%",
    },
    // {
    //   name: "Organic Baby Food",
    //   image:
    //     "https://img.freepik.com/free-vector/baby-food_1284-25176.jpg?size=626&ext=jpg&ga=GA1.1.1097796274.1711213236&semt=ais",
    //   text: "Create Beautiful Moments Every Day with Our Baby Essentials.",
    // },
    {
      name: "Baby Feeding Bottles",
      image:
        "https://img.freepik.com/free-photo/closeup-bottle-full-milk-duck-toy-white-surface_181624-51892.jpg?size=626&ext=jpg&ga=GA1.1.1097796274.1711213236&semt=ais",
      text: "Experience Unmatched Quality and Care for Your Baby's Needs.",
      price: 300.0,
      discount: "-10%",
    },
    {
      name: "Baby Nursery Decor",
      image:
        "https://img.freepik.com/premium-photo/close-up-pink-flowers-table_1048944-3412131.jpg?size=626&ext=jpg&ga=GA1.1.1097796274.1711213236&semt=ais",
      text: "Nurture Your Baby's Growth with Our Thoughtfully Curated Selection.",
      price: 400.0,
      discount: "-20%",
    },
    {
      name: "Baby Toys Collection",
      image:
        "https://img.freepik.com/free-photo/cute-rubber-duck-still-life_23-2150673520.jpg?size=626&ext=jpg&ga=GA1.1.1097796274.1711213236&semt=ais",
      text: "Join Our Community of Happy Parents and Healthy Babies!",
      price: 150.0,
      discount: "-17%",
    },
  ];

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co/bdYQJLJ/9999.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex justify-center flex-col items-center">
        <div className="hero-content text-center pt-20 text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              Discover a World of Comfort, Safety, and Joy for Your Little Ones.
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              quia necessitatibus recusandae saepe, dicta ab praesentium
              voluptates esse vitae corporis quod harum reiciendis voluptate,
              dolores, dignissimos id hic reprehenderit deleniti. Tempora quia
              accusantium nihil labore quam distinctio dolore voluptas
              laboriosam!
            </p>
            {/* <button className="btn btn-outline  btn-info">Get Started</button> */}
          </div>
        </div>
        <div className="carousel carousel-center max-w-2xl p-4 space-x-4  rounded-box ">
          {babyProductData.map((baby, i) => (
            <div
              key={i + 1}
              className="carousel-item flex flex-col justify-center  text-white relative "
            >
              <Image
                src={baby.image}
                alt="baby image"
                className="rounded-lg  "
                width={200}
                height={200}
              />
              <p className="pt-1">{baby.name}</p>
              <p className="text-slate-300">
                <small>
                  <del>$230.00</del> ${baby.price}
                </small>
              </p>
              <p className="absolute text-xs top-0 p-1 px-2 m-2 rounded bg-black">
                {baby.discount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
