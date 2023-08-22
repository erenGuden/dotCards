import React, { FC } from "react";
import styles from "../app/page.module.css";
import Banner from "../assets/images/Banner.svg";
import MobileBanner from "../assets/images/MobileBanner.png";
import Arrow from "../assets/images/Arrow.svg";
import Image from "next/image";

interface Props {}

const Display: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.banner}>
      <Image
        src={Banner}
        alt="Banner"
        // layout="fill"
        // objectFit="cover"
        className={styles.desktopOnly}
      />
      {/* Displays only on mobile */}
      <Image
        src={MobileBanner}
        alt="mobile banner"
        layout="fill"
        objectFit="cover"
        className={styles.mobileOnly}
      />

      {/* Shop Now Button */}
      <button className={styles.bannerButton}>
        Shop Now
        <Image src={Arrow} alt="Arrow" width={24} height={24} />
      </button>
    </div>
  );
};

export default Display;
