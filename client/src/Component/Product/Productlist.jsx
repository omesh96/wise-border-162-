import React from "react";
import styles from "../Product/Product.module.css";
import { Box } from "@chakra-ui/react";
import ProductCart from "./ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/action";
import { useEffect } from "react";
import { useState } from "react";

const Productlist = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getData());
  }, []);

  

  return (
    <div>
      <div className={styles.top_div}>
        <h1>Baby Care (1174)</h1>
        <select className={styles.filter_div} name="" id="">
          <option value="">Populartiy</option>
          <option value="">Price - Low to High</option>
          <option value="">Price - High to Low</option>
          <option value="">Alphabetical</option>
          <option value="">Rupee Saving - High to Low</option>
          <option value="">Rupee Saving - Low to High</option>
          <option value="">% Off - High to Low</option>
        </select>
      </div>

      <div>
        <div className={styles.top_second_div}>
          <img
            src="https://www.bbassets.com/static/v2636/custPage/build/content/img/standard-del.svg"
            alt=""
          />
          <h4>ALL PRODUCTS</h4>
        </div>
        <hr />
      </div>
      <div className={styles.data}>
        {products.length > 0 &&
          products.map((el) => {
            return <ProductCart key={el.id} data={el} />;
          })}
      </div>
    </div>
  );
};

export default Productlist;
