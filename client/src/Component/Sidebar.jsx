import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "../Component/Product/Product.module.css";
const Sidebar = () => {
  return (
    <>
      <div>Sidebar</div>
      <Box
        marginBottom={2}
        width={"45px"}
        borderBottom={"3px solid green"}
        textAlign={"left"}
      >
        Brand
      </Box>

      <hr />

      <Box className={styles.filter_box} textAlign={"left"} alignItems={"left"}>
        <div>
          <input type="checkbox" value="science_friction" />
          <label>All Time</label>
        </div>
        <div>
          <input type="checkbox" value="motivation" />
          <label>Anchor by Panasonic</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Anjali</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Aristo</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Asian</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Bajaj</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Bamboooz</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Bark Out Loud</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>bb Combo</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>BB Home</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>BB Home Earth</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Bergner</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Butterfly</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Canine Creek</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Cartini by Godrej</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Casasunco</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Catsan</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Cello</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Cesar</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Chew A Bone</label>
        </div>

        <div>
          <input type="checkbox" value="snd" />
          <label>Chip Chops</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Claycraft</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Coconut</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Command</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Deli</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Desidiya</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Dine Time</label>
        </div>
        <div>
          <input type="checkbox" value="snd" />
          <label>Dinewell</label>
        </div>
      </Box>

      <Box
        marginTop={3}
        width={"70px"}
        borderBottom={"3px solid green"}
        textAlign={"left"}
      >
        Category
      </Box>
      <hr />
      <Text color={"green"} marginTop={2} textAlign={"left"} fontSize={14}>
        Fruits & Vegetables
      </Text>

      <Box className={styles.category_box} marginLeft={1} textAlign={"left"}>
        <Text color={"gray.600"} marginTop={2} fontSize={14}>
          Appliances & Electricals (354)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Bakeware (315)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Cookware & Non Stick (634)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Crockery & Cutlery (1110)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Flask & Casserole (147)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Gardening (448)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Kitchen Accessories (806)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Pet Food & Accessories (849)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Steel Utensils (632)
        </Text>
        <Text color={"gray.600"} fontSize={14}>
          Storage & Accessories (1199)
        </Text>
      </Box>
    </>
  );
};

export default Sidebar;
