export interface IProduct extends IProductQuantity {
  id: string;
  cover: string;
  images: string[];
  name: string;
  price: number;
  subtitle: string;
  priceSale: number;
  status: string;
  description: string;
  sold: number;
}

export type IProductQuantity = {
  id: string;
  quantity: number;
};
