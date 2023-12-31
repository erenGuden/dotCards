import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image1mobil,
  image2mobil,
  image3mobil,
  image4mobil,
} from "../assets/images/dummy";
import { IProduct } from "../models/dto/product.dto";

export const productList: IProduct[] = [
  {
    id: "1",
    cover: image1.src,
    images: [image1.src, image6.src, image7.src],
    imageDetail: image5.src,
    imageMobil: image1mobil.src,
    name: "Off-White",
    price: 775,
    subtitle: 'Out Of Office "Ooo"sneakers',
    priceSale: 58,
    status: "sale",
    description: `Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.`,
    features: [
      `Regular fit`,
      `Lace closure`,
      `Rubber outsole with vulcanized look`,
      `Imported`,
    ],
    sold: 1,
    quantity: 1,
  },
  {
    id: "2",
    cover: image2.src,
    images: [image2.src, image8.src, image9.src],
    imageDetail: image10.src,
    imageMobil: image2mobil.src,

    name: "Nike",
    price: 200,
    subtitle: "Nike Gamma Force",
    priceSale: 200,
    status: "sale",
    description: `Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.`,
    features: [
      `Regular fit`,
      `Lace closure`,
      `Rubber outsole with vulcanized look`,
      `Imported`,
    ],
    sold: 1,
    quantity: 1,
  },
  {
    id: "3",
    cover: image3.src,
    images: [image3.src, image11.src, image12.src],
    imageDetail: image13.src,
    imageMobil: image3mobil.src,
    name: "Nike",
    price: 160,
    subtitle: "Cosmic Unity 3",
    priceSale: 160,
    status: "sale",
    description: `Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.`,
    features: [
      `Regular fit`,
      `Lace closure`,
      `Rubber outsole with vulcanized look`,
      `Imported`,
    ],
    sold: 1,
    quantity: 1,
  },
  {
    id: "4",
    cover: image4.src,
    images: [image4.src, image15.src, image16.src],
    imageDetail: image14.src,
    imageMobil: image4mobil.src,
    name: "adidas",
    price: 98.99,
    subtitle: "DAILY 3.0 SHOES",
    priceSale: 98.99,
    status: "sale",
    description: `Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.`,
    features: [
      `Regular fit`,
      `Lace closure`,
      `Rubber outsole with vulcanized look`,
      `Imported`,
    ],
    sold: 1,
    quantity: 1,
  },
];
