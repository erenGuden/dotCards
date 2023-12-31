import { productList } from "@/utils/data";
import { IProduct } from "@/models/dto/product.dto";
import React, { FC } from "react";
import styles from "../app/page.module.css";
import ProductCard from "./productCard";

interface Props {}
const isMobile = window.innerWidth <= 768;

const ProductList: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div>
      <span style={innerStyle.header}>Explore our latest drops</span>
      <div className={styles.grid}>
        {productList.map((val: IProduct, index: number) => {
          return <ProductCard item={val} key={index} />;
        })}
      </div>
    </div>
  );
};

const innerStyle = {
  header: {
    fontSize: isMobile ? "28px" : "36px",
    fontWeight: 700,
    color: "black",
    lineHeight: isMobile ? "36px" : "48px",
    fontFamily: "DM Sans",
    letterSpacing: "-1px",
    width: "394px",
    height: "48px",
    display: "block",
    marginTop: "24px",
    marginBottom: "32px",
  },
};
export default ProductList;
