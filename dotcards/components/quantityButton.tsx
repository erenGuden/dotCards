"use client";
import React, { FC } from "react";
import Image from "next/image";
import images from "../assets/images/index";

interface Props {
  // catch probs to use in this component
  quantity?: number;
  handleAmountIncrement: () => void;
  handleAmountDecrement: () => void;
}

const isMobile = window.innerWidth <= 768;

const QuantityButton: FC<Props> = (props: Props) => {
  const { quantity, handleAmountIncrement, handleAmountDecrement } = props;
  return (
    <main>
      <div style={innerStyle.quantityContainer}>
        <button style={innerStyle.button}>
          <Image
            src={images.minus}
            alt="minus"
            onClick={handleAmountDecrement}
          />
        </button>
        <p>{quantity}</p>
        <button style={innerStyle.button}>
          <Image src={images.plus} alt="plus" onClick={handleAmountIncrement} />
        </button>
      </div>
    </main>
  );
};

const innerStyle = {
  quantityContainer: {
    display: "inline-flex",
    width: isMobile ? "102px" : "136px",
    height: isMobile ? "36px" : "48px",
    alignItems: "center",
    gap: isMobile ? "12px" : "16px",
    padding: isMobile ? "9px 12px" : "12px 16px",
    justifyContent: "space-between",
    borderRadius: isMobile ? "7.5px" : "10px",
    border: "1px solid #E9EBEE",
    boxShadow:
      "0px 4.444444179534912px 66.66666412353516px 0px rgba(0, 0, 0, 0.08)",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    border: "0",
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    cursor: "pointer",
    width: isMobile ? "18px" : "24px",
    height: isMobile ? "18px" : "24px",
  },
};

export default QuantityButton;
