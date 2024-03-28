export type TFlashProduct = {
  _id: string;
  name: string;
  image: string;
  price: number;
  flashSale: boolean;
  createdAt: string;
  discount?: string;
};

export type TProducts = {
  _id: string;
  image: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  ratings: number;
  description: string;
};
