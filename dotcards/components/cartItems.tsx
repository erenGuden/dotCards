import React, { FC } from "react";
import styles from ".././app/page.module.css";
import QuantityButton from "./quantityButton";
import Remove from "./removeButton";
import { IProduct } from "@/models/dto/product.dto";
import Image from "next/image";

interface Props {
  product: IProduct;
  lastItem?: boolean;

  handleAmountIncrement: (product: IProduct) => void;
  handleAmountDecrement: (product: IProduct) => void;
  handleRemove: (product: IProduct) => void;
}

const CartItems: FC<Props> = (props: Props) => {
  const {
    product,
    lastItem,
    handleAmountIncrement,
    handleAmountDecrement,
    handleRemove,
  } = props;
  return (
    <main
      style={{
        borderBottom: !lastItem ? "1px solid #E5E5E5" : "none",
      }}
    >
      {/* Product Card */}
      <div className={styles.cartContainer}>
        {/* Item */}
        <div className={styles.cartItems}>
          {/* Product Left Side  */}

          <div className={styles.itemImage}>
            <Image
              src={product.cover}
              alt="Banner"
              width={170}
              height={170}
              style={{
                borderRadius: 19,
              }}
            />
          </div>

          {/* Product Right Side  */}
          <div className={styles.itemDetails}>
            <div className={styles.itemTopDetails}>
              <div className={styles.itemTopLeftDetails}>
                <span style={{ fontWeight: 700, fontSize: "20px" }}>
                  {product?.name}
                </span>
                <span
                  style={{
                    color: "darkgray",
                    paddingTop: 6,
                    whiteSpace: "nowrap",
                    fontSize: "18px",
                  }}
                >
                  {product?.subtitle}
                </span>
              </div>
              <div className={styles.itemTopRightDetails}>
                <span>${product?.priceSale}</span>
              </div>
            </div>
            <div className={styles.itemBottomDetails}>
              <QuantityButton
                quantity={product?.quantity}
                handleAmountIncrement={() => {
                  handleAmountIncrement(product);
                }}
                handleAmountDecrement={() => {
                  if (product.quantity > 1) handleAmountDecrement(product);
                }}
              />
              <Remove
                handleRemove={() => {
                  handleRemove(product);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartItems;
