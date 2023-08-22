export interface IProduct extends IProductQuantity {
  id: string;
  cover: string;
  images: string[];
  imageDetail: string;
  imageMobil: string;
  name: string;
  price: number;
  subtitle: string;
  features: string[];
  priceSale: number;
  status: string;
  description: string;
  sold: number;
}

export type IProductQuantity = {
  id: string;
  quantity: number;
};
