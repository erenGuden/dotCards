import React, { FC } from "react";
import styles from "../app/page.module.css";
import Banner from "../assets/images/Banner.svg";
import Arrow from "../assets/images/Arrow.svg";
import Image from "next/image";

interface Props {}

const Carousel: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div
      className={styles.grid}
      style={{
        width: "1150px",
        height: "427px",
        flexShrink: "0",
        position: "relative",
        marginBottom: "64px",
      }}
    >
      <Image src={Banner} alt="Banner" width={1150} />
      {/* Shop Now Button */}

      <button
        style={{
          position: "absolute",
          left: "190px", // Adjust the horizontal position of the button
          bottom: "4px", // Adjust the vertical position of the button
          transform: "translate(-50%, -50%)", // Center the button on the image
          backgroundColor: "black",
          padding: "20px 80px",
          borderRadius: "8px",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        Shop Now
        <Image src={Arrow} alt="Arrow" width={24} height={24} />
      </button>
    </div>
  );
};

export default Carousel;
