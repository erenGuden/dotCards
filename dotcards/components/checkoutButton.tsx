// pages/Page.tsx

import React, { FC } from "react";
import Arrow from "../assets/images/Arrow.svg";
import Image from "next/image";

interface Props {}

const checkout: FC<Props> = (props: Props) => {
  return (
    <main>
      {/* Top left: Product Image */}
      <button style={innerStyle.button}>
        Checkout
        <Image src={Arrow} alt="Arrow" width={24} height={24} />
      </button>
    </main>
  );
};

const innerStyle = {
  button: {
    backgroundColor: "black",
    width: "80%",
    height: "54px",
    borderRadius: "10px",
    margin: "36px ",
    fontWeight: 700,
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default checkout;
