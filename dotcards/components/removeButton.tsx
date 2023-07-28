// pages/Page.tsx

import React from "react";
import styles from ".././app/page.module.css";

export default function Remove() {
  return (
    <main>
      <button
        style={{
          backgroundColor: "transparent",
          textDecorationLine: "underline",
          color: "#67696E",
          fontSize: "16px",
          border: "none",
          marginLeft: 30,
          fontWeight: 700,
          paddingTop: 14,
          lineHeight: "24px",
        }}
      >
        Remove
      </button>
    </main>
  );
}
