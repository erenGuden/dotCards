"use client";

import React, { FC } from "react";

interface Props {
  onClick: () => void;
}

const isMobile = window.innerWidth <= 768;

const addToCart: FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <button style={styles.button} onClick={onClick}>
      Add to Cart
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "black",
    width: "100%",
    height: isMobile ? "48px" : "60px",
    borderRadius: "10px",
    marginTop: isMobile ? "25px" : "56px ",
    fontWeight: 700,
    fontSize: isMobile ? "16px" : "18px",
    lineHeight: "20px",
    fontFamily: "Inter",
    // gap: "1000px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

export default addToCart;
