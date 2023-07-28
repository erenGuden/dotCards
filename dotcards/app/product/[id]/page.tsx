"use client";

import React, { FC, use, useEffect, useState } from "react";
import styles from "../../../app/page.module.css";
import Image from "next/image";
import Banner from "../../../assets/images/Banner.svg";
import QuantityButton from "@/components/quantityButton";
import AddToCart from "@/components/addToCartButton";
import { productList } from "@/utils/data";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { IProduct } from "@/models/dto/product.dto";
import { addBasket, setCartTotal } from "@/utils/redux/commonSlice";
import CarouselComponent from "@/components/carousel";

interface Props {
  params: {
    id: string;
  };
  searchParams: any;
}

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
    setProduct({ ...product, quantity: product.quantity + 1 });
  };

  return (
    <main className={styles.main}>
      {/* Top section */}
      <div className={styles.productInfo}>
        {/* Top left: Product Image */}
        {product?.images?.length > 0 && (
          <CarouselComponent images={product.images} />
        )}
        <div className={styles.headerContainer}>
          <div className={styles.headerContainerTop}>
            {/* Title */}
            <h2 style={{ fontFamily: "DM Sans" }}>{product?.name}</h2>
            {/* Description */}
            <p style={{ fontFamily: "Inter" }}>{product?.description}</p>
            {/* Price */}
            <span>${product?.priceSale}</span>
          </div>
          <div className={styles.headerContainerBottom} style={{ border: 0 }}>
            <h3 style={innerStyle.quantity}>Quantity</h3>
            <QuantityButton
              quantity={product.quantity}
              handleAmountIncrement={() => handleAmountIncrement()}
              handleAmountDecrement={() => handleAmountDecrement()}
            />
          </div>
          <AddToCart onClick={onClickAddToCart} />
        </div>{" "}
      </div>

      {/* Bottom section */}
      <div className={styles.productDescription}>
        <div
          className={styles.descriptionContainer}
          style={{ borderRadius: 0 }}
        >
          <div className={styles.headerContainerTop} style={{ paddingLeft: 0 }}>
            {/* Description */}
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "32px",
                letterSpacing: "-0.5px",
              }}
            >
              Description
            </h3>
          </div>
          <p style={{ marginTop: "18px" }}>{product.description}</p>
        </div>
        <Image
          src={product.cover}
          alt="description"
          className={styles.productTopImage}
          width={528}
          height={373}
        />
        {/* Top left: Product Image */}
      </div>
    </main>
  );
};

const innerStyle = {
  quantity: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "20px",
    letterSpacing: "-0.5px",
    fontFamily: "DM Sans",
    marginBottom: "16px",
  },
};

export default ProductPage;
