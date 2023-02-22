import React from 'react';
import {Box}  from "@chakra-ui/react";
import styles from "../Component/Product/Product.module.css";
const Sidebar = () => {
  return (
    <>
    <div>Sidebar</div>
     <Box marginBottom={2} width={"45px"}  borderBottom={"3px solid green"} textAlign={"left"}>
      Brand
     </Box>

<hr />

 <Box  className={styles.filter_box} textAlign={"left"} alignItems={"left"}>
 <div>
        <input
          type="checkbox"
          value="science_friction"
         
        />
        <label>All Time</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="motivation"
        
        />
        <label>Anchor by Panasonic</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Anjali</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Aristo</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Asian</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Bajaj</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Bamboooz</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Bark Out Loud</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>bb Combo</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>BB Home</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>BB Home Earth</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Bergner</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Butterfly</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Canine Creek</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Cartini by Godrej</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Casasunco</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Catsan</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Cello</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Cesar</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Chew A Bone</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Chip Chops</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Claycraft</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Coconut</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Command</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Deli</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Desidiya</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Dine Time</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="snd"
         
        />
        <label>Dinewell</label>
      </div>

 </Box>

 <Box marginTop={3} width={"70px"}  borderBottom={"3px solid green"} textAlign={"left"}>
 Category
     </Box>
     <hr/>


    </>
  )
}

export default Sidebar