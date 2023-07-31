import React, { FC } from "react";
import styles from "../app/page.module.css";
import Banner from "./display";
import ProductList from "./ProductList";

interface Props {}

const Content: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.center}>
      {/* Banner */}
      <Banner />
      {/* ProductList */}
      <ProductList />
    </div>
  );
};

export default Content;
