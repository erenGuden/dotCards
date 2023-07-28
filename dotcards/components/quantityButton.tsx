"use client";
import React, { FC } from "react";
import Image from "next/image";
import { addBasket } from "@/utils/redux/commonSlice";
import { IProduct } from "@/models/dto/product.dto";
import images from "../assets/images/index";

interface Props {
  quantity?: number;

  handleAmountIncrement: () => void;
  handleAmountDecrement: () => void;
}

const QuantityButton: FC<Props> = (props: Props) => {
  const { quantity, handleAmountIncrement, handleAmountDecrement } = props;
  return (
    <main>
      {/* Top left: Product Image */}
      <div style={innerStyle.productImage}>
        <button style={innerStyle.button}>
          <Image
            src={images.minus}
            alt="minus"
            onClick={handleAmountIncrement}
          />
        </button>
        <p>{quantity}</p>
        <button style={innerStyle.button}>
          <Image src={images.plus} alt="plus" onClick={handleAmountDecrement} />
        </button>
      </div>
    </main>
  );
};

const innerStyle = {
  productImage: {
    display: "inline-flex",
    width: "136px",
    height: "48px",
    alignItems: "center",
    gap: "16px",
    justifyContent: "space-between",
    borderRadius: "10px",
    border: "1px solid #E9EBEE",
    boxShadow:
      "0px 4.444444179534912px 66.66666412353516px 0px rgba(0, 0, 0, 0.08)",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    border: "0",
    cursor: "pointer",
    width: 24,
    height: 24,
  },
};

export default QuantityButton;
