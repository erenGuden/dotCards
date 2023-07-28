import React, { FC, useEffect, useState } from "react";
import styles from ".././app/page.module.css";
import Checkout from "@/components/checkoutButton";
import { IProduct } from "@/models/dto/product.dto";
import { useAppSelector } from "@/utils/redux/hooks";

interface Props {}

const Summary: FC<Props> = (props: Props) => {
  const {} = props;
  const { cartList } = useAppSelector((state) => state.commonSlice);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      cartList.reduce((total: number, item: IProduct) => {
        return total + item.priceSale * item.quantity;
      }, 0)
    );
  }, [cartList]);

  return (
    <main style={{ flex: 1 }}>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContainerTop}>
          {/* Title */}
          <h3
            style={{
              color: "black",
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "22px",
            }}
          >
            Summary
          </h3>
          <div>
            <span className={styles.summarySpan}>Subtotal</span>
            <span className={styles.summarySpan}>${total.toFixed(2)}</span>
          </div>
          <div>
            <span className={styles.summarySpan}>Shipping and delivery</span>
            <span className={styles.summarySpan}>$20.00</span>
          </div>
          <div>
            <span className={styles.summarySpan}>Tax</span>
            <span className={styles.summarySpan}>$20.00</span>
          </div>
          <div>
            <span className={styles.summarySpan}>Discount</span>
            <span
              className={styles.summarySpan}
              style={{
                color: "red",
              }}
            >
              - $5.00
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        ></div>
        <div>
          <span style={{ marginLeft: "36px", fontSize: 22, fontWeight: 700 }}>
            Total
          </span>
          <span style={{ fontSize: 22, fontWeight: 700 }}>
            ${(total + 20 + 20 - 5).toFixed(2)}
          </span>
        </div>
        <Checkout />
      </div>
    </main>
  );
};

export default Summary;
