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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image src={logo} width={24} height={24} alt="Sun Co. Logo" />
          <p
            style={{
              color: "black",
              marginLeft: 9,
              textAlign: "right",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "24px",
            }}
          >
            SUN CO.
          </p>
        </div>
      </Link>
      {/* right */}
      {cartList.length > 0 ? (
        <Link href={{ pathname: "/cart" }}>
          <button style={innerStyle.button}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Image src={cartIcon} width={24} height={24} alt="Cart Icon" />
              <p style={{ color: "black", marginLeft: 9 }}>View Cart</p>
            </span>
            <div style={innerStyle.badge}>{cartList.length}</div>
          </button>
        </Link>
      ) : (
        <button
          style={innerStyle.button}
          onClick={() => {
            alert("Cart is empty");
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <Image src={cartIcon} width={24} height={24} alt="Cart Icon" />
            <p style={{ color: "black", marginLeft: 9 }}>View Cart</p>
          </span>
        </button>
      )}
    </div>
  );
};

const innerStyle = {
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    cursor: "pointer",
    width: 142,
    height: 40,
    borderRadius: 8,
  },
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
};

export default Header;
