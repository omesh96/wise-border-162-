import React,{ useState,useRef,useCallback } from 'react'
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Select,
  HStack,
  Text,
  Textarea
} from '@chakra-ui/react';
import {AiOutlineEdit} from 'react-icons/ai'
import axios from 'axios'



const UpdateProductModal = (el) => {

  const {_id,category,brand,name,price,discount,description,images,ratings,reviews,available} = el;
  console.log("id",_id)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Category,setCategory] = useState(category);
    const categoryRef = useRef(null);
    const [Name, setName] = useState(name);
    const nameRef = useRef(null);
    const [Brand, setBrand] = useState(brand);
    const brandRef = useRef(null);
    const [Description, setDescription] = useState(description);
    const descriptionRef = useRef(null);
    const [Price, setPrice] = useState(price);
    const priceRef = useRef(null);
    const [Discount, setDiscount] = useState(discount);
    const discountRef = useRef(null);
    const [Images, setImages] = useState(images);
    const imagesRef = useRef(null);
    const [Ratings, setRatings] = useState(ratings);
    const ratingsRef = useRef(null);
    const [Reviews,setReviews] = useState(reviews);
    const reviewsRef = useRef(null);
    const [Available, setAvailable] = useState(available);
    const [message, setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    const updateProduct = useCallback(async () => {
      if(!Name)
          nameRef.current.style.border = "1px solid red";
      else
          nameRef.current.style.border = "1px solid green";
      if(!Category)
          categoryRef.current.style.border="1px solid red";
      else
          categoryRef.current.style.border="1px solid green";
      if(!Brand)
          brandRef.current.style.border="1px solid red";
      else
          brandRef.current.style.border="1px solid green";
      if(!Price)
          priceRef.current.style.border="1px solid red";
      else
          priceRef.current.style.border="1px solid green";
      if(!Discount)
          discountRef.current.style.border="1px solid red";
      else
          discountRef.current.style.border="1px solid green";
      if(!Ratings)
          ratingsRef.current.style.border="1px solid red";
      else
          ratingsRef.current.style.border="1px solid green";
      if(!Images)
          imagesRef.current.style.border="1px solid red";
      else
          imagesRef.current.style.border="1px solid green";
      if(!Description)
          descriptionRef.current.style.border = "1px solid red";
      else
          descriptionRef.current.style.border = "1px solid green";
      if(!Reviews)
          reviewsRef.current.style.border="1px solid red";
      else
          reviewsRef.current.style.border="1px solid green";
      if(Name && Brand && Category && Price && Discount && Ratings && Reviews && Images && Description)
      {
          if(Name!=name || Brand!=brand || Category!=category || Price!=price || Discount!=discount || Ratings!=ratings || Reviews!=reviews || Images!=images || Description!=Description || Available!=available)
          {
            setMessage('');
            setLoading(true);
            const productDetails = {
                category : Category,
                brand : Brand,
                name : Name,
                price : Price,
                discount : Discount,
                description : Description,
                images : Images,
                ratings : Ratings,
                reviews  : Reviews,
                available : Available
            }
            await updateProductApi(productDetails);
            setLoading(false);
            onClose();
          }
          else
          {
            setMessage('**No changes encountered');
          }
      }
      else
      {
          setMessage('**All fields required');
      }
  },[Brand,Category,Discount,Name,Ratings,Reviews,Price,Description,Available,Images,onClose])


const updateProductApi = async (details)=>{
  try{
      const res = await axios.patch(`http://localhost:8080/products/${_id}`,details);
      console.log(res.data);
  }
  catch(err)
  {
      console.log(err);
  }
}



  return (
    <>
      <Button leftIcon={<AiOutlineEdit color="teal" />} colorScheme='green' variant='outline' onClick={onOpen}>
        Update Details
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        size={{base : "sm",sm: 'sm',md :'md',xl: 'xl','2xl' : '2xl'}}
        motionPreset='slideInBottom'
        scrollBehavior='inside'
      >
        <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent>
          <ModalHeader fontSize={'xl'} fontWeight="bold" color="green.700">Update Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign="center" size="lg" fontWeight="bold">Product Id : <Text fontWeight="bold" color="red" size="lg" as="span">{_id}</Text></Text>
            <form>
                <FormControl mb={4}>
                    <FormLabel>Select Category</FormLabel>
                    <Select value={Category} onChange={(e)=>setCategory(e.target.value)} placeholder="Select Category" ref={categoryRef}>
                        <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                        <option value="Food Grains, Oil & Masala">Food Grains, Oil & Masala</option>
                        <option value="Bakery, Cakes & Dairy">Bakery, Cakes & Dairy</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks & Branded Foods">Snacks & Branded Foods</option>
                        <option value="Beauty & Hygiene">Beauty & Hygiene</option>
                        <option value="Baby Care">Baby Care</option>
                    </Select>
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Brand</FormLabel>
                    <Input value={Brand} onChange={(e)=>setBrand(e.target.value)} ref={brandRef} placeholder='Product Brand Name' type="text" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Name</FormLabel>
                    <Input value={Name} onChange={(e)=>setName(e.target.value)} ref={nameRef} placeholder='Product Name' type="text" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Description</FormLabel>
                    <Textarea value={Description} onChange={(e)=>setDescription(e.target.value)} ref={descriptionRef} placeholder='Product Description' />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Price</FormLabel>
                    <Input value={Price} onChange={(e)=>setPrice(e.target.value)} ref={priceRef} placeholder='Product Price' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Image Link</FormLabel>
                    <Input value={Images} onChange={(e)=>setImages(e.target.value)} ref={imagesRef} placeholder='Product Image Link' type="text" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Discount</FormLabel>
                    <Input value={Discount} onChange={(e)=>setDiscount(e.target.value)} ref={discountRef} placeholder='Product Discount' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Ratings</FormLabel>
                    <Input value={Ratings} onChange={(e)=>setRatings(e.target.value)} ref={ratingsRef} placeholder='Product Ratings' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Reviews</FormLabel>
                    <Input value={Reviews} onChange={(e)=>setReviews(e.target.value)} ref={reviewsRef} placeholder='Product Reviews' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <Checkbox colorScheme='green' isChecked={Available} onChange={(e)=>setAvailable(e.target.checked)}>
                        Available
                    </Checkbox>
                </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
          <Text color="red" fontSize="sm">{message}</Text>
            <HStack>
                <Button colorScheme='red' variant={'ghost'} mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='solid' isLoading={loading}
    loadingText='Updating' colorScheme="green" onClick={updateProduct}>Update</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateProductModal