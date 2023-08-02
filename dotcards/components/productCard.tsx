import { IProduct } from "@/models/dto/product.dto";
import React, { FC } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

interface Props {
  item: IProduct;
}

const ProductCard: FC<Props> = (props: Props) => {
  const { item } = props;

  return (
    <div className={styles.card}>
      <Link href={{ pathname: "/product" }} as={`product/${item.id}`}>
        {/* Image */}
        <Image
          src={item.cover}
          alt="cover"
          width={270}
          height={284}
          style={{
            borderRadius: 19,
          }}
        />

        {/* Title */}
        <h2>{item.name}</h2>
        {/* Subtitle */}
        <p>{item.subtitle}</p>
        {/* Price */}
        <span>${item.priceSale}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
