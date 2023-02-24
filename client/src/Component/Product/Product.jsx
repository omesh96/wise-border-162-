import React from "react";
import Productlist from "./Productlist";
import Sidebar from "../Sidebar";
import styles from "../Product/Product.module.css";
const Product = () => {
  return (
    <div className={styles.main_container}>
      {/* <Navbar /> */}
      <div className={styles.filter_container}>
        <div className={styles.filter_component}>
          <Sidebar />
        </div>
        <div className={styles.booklist}>
          <Productlist />
        </div>
      </div>
    </div>
  );
};

export default Product;
