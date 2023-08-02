"use client";

import React, { useEffect } from "react";
import styles from "../../app/page.module.css";
import Summary from "@/components/summary";
import CartItems from "@/components/cartItems";

import { IProduct } from "@/models/dto/product.dto";
import { addBasket } from "@/utils/redux/commonSlice";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";

const isMobile = window.innerWidth <= 768;

export default function Page() {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.commonSlice);

  useEffect(() => {}, [cartList]);

  const handleAmountIncrement = (item: IProduct) => {
    let tempList = [...cartList];
    let findIndex = tempList.findIndex((i) => i.id === item.id);
    if (findIndex !== -1) {
      let temp = { ...tempList[findIndex] };
      temp.quantity = temp.quantity + 1;
      tempList[findIndex] = temp;
      dispatch(addBasket(tempList));
      return;
    }
  };

  const handleAmountDecrement = (item: IProduct) => {
    let tempList = [...cartList];
    let findIndex = tempList.findIndex((i) => i.id === item.id);
    if (findIndex !== -1) {
      let temp = { ...tempList[findIndex] };
      temp.quantity = temp.quantity - 1;
      tempList[findIndex] = temp;
      dispatch(addBasket(tempList));
      return;
    }
  };

  const handleRemove = (item: IProduct) => {
    let tempList = [...cartList];
    let findIndex = tempList.findIndex((i) => i.id === item.id);
    if (findIndex !== -1) {
      tempList.splice(findIndex, 1);
      dispatch(addBasket(tempList));
      return;
    }
  };

  return (
    <main className={styles.main}>
      {/* Cart Left Side */}
      <div className={styles.cartPageWrapper}>
        <div className={styles.cartPageLeft}>
          {/* Display items that are added to cart */}
          <h4 style={innerStyle.h4}>Your Bag</h4>
          {cartList.map((item: IProduct) => (
            <CartItems
              key={item.id}
              product={item}
              handleAmountIncrement={(product: IProduct) =>
                handleAmountIncrement(product)
              }
              handleAmountDecrement={(product: IProduct) =>
                handleAmountDecrement(product)
              }
              handleRemove={(product: IProduct) => handleRemove(product)}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Cart Right Side */}
          <Summary />
        </div>
      </div>
    </main>
  );
}

// Inner Styling
const innerStyle = {
  h4: {
    color: "black",
    fontSize: isMobile ? "28px" : "36px",
    letterSpacing: "-1px",
    lineHeight: isMobile ? "36px" : "48px",
    fontFamily: "DM Sans",
  },
};
