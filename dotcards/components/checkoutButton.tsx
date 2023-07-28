// pages/Page.tsx

import React from "react";
import styles from ".././app/page.module.css";
import Arrow from "../assets/images/Arrow.svg";
import Image from "next/image";
export default function checkout() {
  return (
    <main>
      {/* Top left: Product Image */}
      <button
        style={{
          backgroundColor: "black",
          width: "388px",
          height: "54px",
          borderRadius: "10px",
          margin: "36px ",
          fontWeight: 700,
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Checkout
        <Image src={Arrow} alt="Arrow" width={24} height={24} />
      </button>
    </main>
  );
}
