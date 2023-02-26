import React from "react";
import styles from "../Product/Product.module.css";
import { Box } from "@chakra-ui/react";
import ProductCart from "./ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { getData, updateData } from "../../Redux/action";
import { useEffect } from "react";
import { useState } from "react";



const Productlist = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [newProducts, setNewProducts] = useState(products);



  useEffect(() => {
    dispatch(getData);
    
  }, [newProducts ]);


console.log("NewProduct" ,newProducts)
console.log("Products" , products )
 




  console.log("products", products);

  //Popularty Sorting
  const handlePopular = () => {
    let filterdData = products.sort((a, b) => {
      return b.rating - a.rating;
    });
    setNewProducts(filterdData);
  };

  //Low to High
  const handleLTH = () => {
    let filterdData = products.sort((a, b) => {
      return a.price - b.price;
    });
    setNewProducts(filterdData);
  };

  //High to  Low
  const handleHTL = () => {
    let filterdData = products.sort((a, b) => {
      return b.price - a.price;
    });
    setNewProducts(filterdData);
  };

  //Alphabetical
  const handleAlpha = () => {
    let filterdData = products.sort((a, b) => a.name.localeCompare(b.name));
    setNewProducts(filterdData);
    console.log("alfa", setNewProducts);
  };

  //RupeeSaving High to Low
  const handleSavingHTL = () => {
    let filterdData = products.sort((a, b) => {
      return b.discount - a.discount;
    });
    setNewProducts(filterdData);
  };

  //RupeeSaving Low to High
  const handleSavingLTH = () => {
    let filterdData = products.sort((a, b) => {
      return a.reviews - b.reviews;
    });
    setNewProducts(filterdData);
  };

  // Discount sorting
  const handleOff = () => {
    let filterdData = products.sort((a, b) => {
      return b.discount - a.discount;
    });
    setNewProducts(filterdData);
  };

  const Sorting = (value) => {
    if (value === "htl") {
      handleHTL();
    } else if (value === "lth") {
      handleLTH();
    } else if (value === "alpha") {
      handleAlpha();
    } else if (value === "rthl") {
      handleSavingHTL();
    } else if (value === "rlth") {
      handleSavingLTH();
    } else if (value === "popularity") {
      handlePopular();
    } else if (value === "ohtl") {
      handleOff();
    }
  };

  return (
    <div>
      <div className={styles.top_div}>
        <h1>Baby Care (1174)</h1>

        <select
          onChange={(e) => Sorting(e.target.value)}
          className={styles.filter_div}
          name=""
          id=""
        >
          <option value="popularity">Populartiy</option>

          <option value="lth">Price - Low to High</option>

          <option value="htl">Price - High to Low</option>

          <option value="alpha">Alphabetical</option>

          <option value="rthl">Rupee Saving - High to Low</option>

          <option value="rlth">Rupee Saving - Low to High</option>

          <option value="ohtl">% Off - High to Low</option>
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
          newProducts.map((el) => {
            return <ProductCart key={el.id} data={el} />;
          })}
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