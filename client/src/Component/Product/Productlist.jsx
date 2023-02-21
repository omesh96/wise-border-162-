import React from 'react'
import styles from "../Product/Product.module.css"

const Productlist = () => {
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
          <img src="https://www.bbassets.com/static/v2636/custPage/build/content/img/standard-del.svg" alt="" />
          <h4>ALL PRODUCTS</h4>
        </div>
        <hr/>
      </div>
      
    </div>
  )
}

export default Productlist