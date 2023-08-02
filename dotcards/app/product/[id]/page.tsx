"use client";

import React, { FC, use, useEffect, useState } from "react";
import styles from "../../../app/page.module.css";
import Image from "next/image";
import QuantityButton from "@/components/quantityButton";
import AddToCart from "@/components/addToCartButton";
import { productList } from "@/utils/data";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { IProduct } from "@/models/dto/product.dto";
import { addBasket } from "@/utils/redux/commonSlice";
import CarouselComponent from "@/components/carousel";

interface Props {
  params: {
    id: string;
  };
  searchParams: any;
}

const isMobile = window.innerWidth <= 768;

const ProductPage: FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.commonSlice);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { params } = props;

  useEffect(() => {
    if (product) {
      const product = productList.find((item) => item.id === params.id);
      if (product) setProduct(product);
    }
  }, []);

  const onClickAddToCart = () => {
    let tempList = [...cartList];
    let findIndex = tempList.findIndex((item) => item.id === product.id);
    if (findIndex !== -1) {
      let temp = { ...tempList[findIndex] };
      temp.quantity = temp.quantity + 1;
      tempList[findIndex] = temp;
      dispatch(addBasket(tempList));
      return;
    }

    dispatch(addBasket([...cartList, product]));
  };

  const handleAmountIncrement = () => {
    setProduct({ ...product, quantity: product.quantity + 1 });
  };

  const handleAmountDecrement = () => {
    if (product.quantity > 1)
      setProduct({ ...product, quantity: product.quantity - 1 });
  };

  return (
    <main className={styles.main}>
      {/* Top section */}
      <div className={styles.productInfoTop}>
        {/* Top left: Product Image */}
        {product?.images?.length > 0 && (
          <CarouselComponent images={product.images} />
        )}

        <div className={styles.productDetailsRight}>
          <div className={styles.productTag}>
            {/* Product Name */}
            <h2 style={innerStyle.h2}>{product?.name}</h2>
            {/* Subtitle */}
            <p style={innerStyle.p}>{product?.subtitle}</p>
            {/* Price */}
            <span style={innerStyle.span}>${product?.priceSale}</span>
          </div>
          <div style={innerStyle.border} />
          {/* Quantity Button */}
          <div className={styles.quantityTag}>
            <h3 style={innerStyle.h3}>Quantity</h3>
            <QuantityButton
              quantity={product.quantity}
              handleAmountIncrement={() => handleAmountIncrement()}
              handleAmountDecrement={() => handleAmountDecrement()}
            />
            <AddToCart onClick={onClickAddToCart} />
          </div>
        </div>
      </div>
      <div className={styles.productInfoBottom}>
        {/* Bottom section */}
        <div className={styles.productInfoDescription}>
          {/* Description */}
          <h2 style={innerStyle.h2Description}>Description</h2>
          <div style={innerStyle.border} />
          <p style={innerStyle.pProductDescription}>{product.description}</p>
          {product?.features &&
            product?.features?.length > 0 &&
            product?.features?.map((item, index) => {
              return (
                <li style={innerStyle.li} key={index}>
                  {item}
                </li>
              );
            })}
        </div>
        {/* Product Image */}
        <div className={styles.productInfoImage}>
          {/* Image */}

          <Image
            alt="description"
            className={styles.productTopImage}
            src={product.imageDetail}
            width={508}
            height={474}
          />
        </div>
      </div>
    </main>
  );
};

// Inner Styling
const innerStyle = {
  h2: {
    fontFamily: "DM Sans",
    fontSize: isMobile ? "18px" : "24px",
    color: "#201B21",
    fontWeight: 700,
    lineHeight: isMobile ? "24px" : "32px",
    letterSpacing: isMobile ? "-0.375px" : "-0.5px",
    marginBottom: isMobile ? "6px" : "16px",
  },
  h2Description: {
    fontFamily: "DM Sans",
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: 700,
    lineHeight: isMobile ? "24px" : "32px",
    letterSpacing: "-0.5px",
    color: "#201B21",
    marginBottom: isMobile ? "8px" : "10px",
  },

  h3: {
    marginBottom: "16px",
    fontFamily: "DM Sans",
    fontSize: isMobile ? "16.5px" : "18px",
    fontStyle: "normal",
    fontWeight: isMobile ? 700 : 700,
    lineHeight: isMobile ? "15px" : "20px",
    letterSpacing: isMobile ? "-0.375px" : "-0.5px",
    color: "black",
  },
  p: {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 400,
    color: "#67696E",
    lineHeight: "24px",
    margin: isMobile ? "6px 0px 13.5px" : "8px 0px 18px",
  },

  pProductDescription: {
    marginTop: "18px",
    marginBottom: "16px",
    marginRight: isMobile ? "0px" : "64px",
    fontFamily: "Inter",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: 400,
    lineHeight: isMobile ? "20px" : "24px",
    color: "#67696E",
  },
  span: {
    fontFamily: "DM Sans",
    color: "#201B21",
    fontSize: isMobile ? "18px" : "24px",
    lineHeight: isMobile ? "18px" : "24px",
    letterSpacing: isMobile ? "-0.375px" : "-0.5px",
  },

  li: {
    fontSize: isMobile ? "16px" : "18px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#67696E",
    marginLeft: "20px",
  },

  border: {
    borderBottom: isMobile ? "0.75px solid #E9EBEE" : "1px solid #E9EBEE",
  },
};

export default ProductPage;
