import React, { FC } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/cartIcon.svg";
import Youtube from "../assets/images/youtube.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import Link from "next/link";
import { useAppSelector } from "@/utils/redux/hooks";
import { style } from "@mui/system";

interface Props {}
const isMobile = window.innerWidth <= 768;

const Footer: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.footer}>
      {/* Left  */}
      <div className={styles.footerLeft}>
        <Link href={{ pathname: "/" }}>
          <div style={innerStyle.logo}>
            <Image src={logo} width={24} height={24} alt="Sun Co. Logo" />
            <p style={innerStyle.name}>SUN CO.</p>
          </div>
        </Link>
        {/* Middle */}
        <div className={styles.footerMiddle}>
          <p>
            © 2023 dot.cards text task.
            {isMobile ? <br /> : ""} All rights reserved
          </p>
        </div>
      </div>
      {/* Right */}
      <div className={styles.social}>
        <Image src={Instagram} alt="instagram" />
        <Image src={Twitter} alt="twitter" />
        <Image src={Youtube} alt="youtube" />
      </div>
    </div>
  );
};

const innerStyle = {
  logo: {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "9px" : "20px",
  },
  name: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    color: "white",
    lineHeight: "24px",
  },
};
export default Footer;
