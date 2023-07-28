"use client";
import React, { FC } from "react";

interface Props {}

const Remove: FC<Props> = (props: Props) => {
  return (
    <main>
      <button style={innerStyle.button}>Remove</button>
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
    paddingTop: 14,
    lineHeight: "24px",
  },
};

export default Remove;
