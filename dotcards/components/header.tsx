import React, { FC } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/cartIcon.svg";
import Link from "next/link";
import { useAppSelector } from "@/utils/redux/hooks";

interface Props {}

const Header: FC<Props> = (props: Props) => {
  const {} = props;
  const { cartList } = useAppSelector((state) => state.commonSlice);

  return (
    <div className={styles.header}>
      {/* left  */}
      <Link href={{ pathname: "/" }}>
        <div style={innerStyle.left}>
          <Image src={logo} width={24} height={24} alt="logo" />
          <p className={styles.headerLogo}>SUN CO.</p>
        </div>
      </Link>
      {/* right */}
      {cartList.length > 0 ? (
        <Link href={{ pathname: "/cart" }}>
          {/* <button style={innerStyle.button}> */}
          <button className={styles.headerButton}>
            <span style={innerStyle.span}>
              <Image src={cartIcon} width={24} height={24} alt="cart" />
              <p style={innerStyle.p}>View Cart</p>
            </span>
            <div style={innerStyle.badge}>{cartList.length}</div>
          </button>
        </Link>
      ) : (
        // if cart is empty, do not navigate
        <button
          className={styles.headerButton}
          onClick={() => {
            alert("Cart is empty");
          }}
        >
          <span style={innerStyle.span}>
            <Image src={cartIcon} width={24} height={24} alt="cart" />
            <p style={innerStyle.p}>View Cart</p>
          </span>
        </button>
      )}
    </div>
  );
};

const innerStyle = {
  badge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EC5E2A",
    borderRadius: "50%",
    width: 24,
    height: 24,
    marginLeft: 9,
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  span: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    color: "black",
    marginLeft: 9,
  },
};

export default Header;
