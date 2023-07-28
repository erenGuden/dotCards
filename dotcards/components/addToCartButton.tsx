"use client";

import React, { FC } from "react";

interface Props {
  onClick: () => void;
}

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
    width: "80%",
    height: "60px",
    borderRadius: "10px",
    margin: "36px ",
    fontWeight: 700,
    fontSize: "18px",
  },
};

export default addToCart;
