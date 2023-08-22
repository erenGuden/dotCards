"use client";
import React, { FC } from "react";

interface Props {
  handleRemove: () => void;
}

const Remove: FC<Props> = (props: Props) => {
  const { handleRemove } = props;
  return (
    <main>
      <button style={innerStyle.button} onClick={handleRemove}>
        Remove
      </button>
    </main>
  );
};

const innerStyle = {
  button: {
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    color: "#67696E",
    fontSize: "16px",
    border: "none",
    marginLeft: 30,
    fontWeight: 700,
    lineHeight: "24px",
  },
};

export default Remove;
