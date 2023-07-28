"use client";

import React, { useEffect } from "react";
import styles from "../../app/page.module.css";
import Summary from "@/components/summary";
import CartItems from "@/components/cartItems";

import { IProduct } from "@/models/dto/product.dto";
import { addBasket } from "@/utils/redux/commonSlice";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";

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
      <div className={styles.productInfo} style={{ flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4
              style={{
                color: "black",
                fontSize: "26px",
                letterSpacing: "-1px",
                marginTop: "5%",
              }}
            >
              Your Bag
            </h4>
            {/* Display items that are added to cart */}
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
          <div style={{ width: "100px" }} />
          <div
            style={{
              display: "flex",
            }}
          >
            {/* Cart Right Side */}
            <Summary />
          </div>
        </div>
      </div>
    </main>
  );
}
