import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  Img,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productsAr = [
  {
    id: 1,
    image:"https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
    title: "Apple iphone",
    price: "13,500",
    city: "Mumbai",
  },
  {
    id: 2,
    image:
      "https://teja9.kuikr.com/i4/20230119/Rog-5s-12-256-VB201705171774173-ak_LWBP1304927883-1674134122.png",
    title: "All Electronics",
    price: "13,500",
  },
  {
    id: 3,
    image:
      "https://teja10.kuikr.com/i5/20230120/phone-in-gud-conditiononly-side-but-misssing--VB201705171774173-ak_LWBP1977897106-1674188176.jpeg",
    title: "Samsung",
    price: "9,500",
    city: "Delhi",
  },
  {
    id: 4,
    image:
      "https://teja10.kuikr.com/i5/20221102/9289238871-WhatsApp---call-me-new-brand-warranty-card-bill-box--all-accessories-VB201705171774173-ak_LWBP1022016775-1667392939.jpeg",
    price: "8,500",
    city: "Chennai",
    title: "Apple iphone",
  },
  {
    id: 5,
    image:
      "https://teja8.kuikr.com/i5/20230120/Call-Me-98396-74107-APPLE-iPHONE-X-256GB--ALL-ACCESSORIES--REPLACEMENT-WARRANTY-WITH-BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP233212309-1674184941.jpeg",
    price: "9,500",
    city: "Hyderabad",
    title: "Samsung",
  },
];
export const MultiCarousel = () => {
  return (
    <Box
      style={{ width: "80%", margin: "auto" }}
    >
      <Box>
        <Flex>
          <Box>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Mobile & Tablets
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Link  to="#">
              View All Results
              <Box> {">"} </Box>
            </Link>
          </Box>
        </Flex>

        <Carousel responsive={responsive}>
          {productsAr.map((el) => {
            return (
              <Flex
            
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  padding="2"
                  borderRadius="8"
                  textAlign={"start"}
                  key={el.id}
                >
                  <Img
                    borderRadius="8"
                    width={["150", "180", "220px"]}
                    height={["180", "200", "220px"]}
                    src={el.image}
                    alt={el.title}
                  />
                  <p>{el.title}</p>
                  <Flex justifyContent="flex-start" paddingY="2">
                    <Box> {el.price}</Box>
                    <Spacer />
                    <Box>{el.city}</Box>
                  </Flex>
                  <Button colorScheme="teal" variant="outline">
                    View
                  </Button>
                </Box>
              </Flex>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};
