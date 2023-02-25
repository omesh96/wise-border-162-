import React, { useContext, useEffect, useState } from 'react'
import "../Admin/Adminpage.css"
import axios from "axios"
import {Button,Image,AlertDialog,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Heading,useToast, FormControl, FormLabel, Input, HStack, Text, Checkbox, Textarea, Select} from "@chakra-ui/react"
import userlog from "../assets/user-image.jpg"
 import {ENV} from "../db.js"
import { AuthContext } from './context/Allcontext'
import {AiOutlineEdit} from 'react-icons/ai'
import UpdateProductModal from '../Component/UpdateProductModal'
import { useNavigate } from 'react-router'

// update data //
const initupdatedata={
  
}


const ProductPage = () => {
  const [userdata,setuserdata]=useState([])
  const [count,setcount]=useState(0)  // useEffect ko run krne k lie jb b userdata update ho
  const { isOpen, onOpen, onClose } = useDisclosure()
 const [loading,setloading]=useState(false)
  const toast = useToast()
  const {state,dispatch,TOTAL_PRODUCT}=useContext(AuthContext)
  const navigate=useNavigate()
  const [element,setelement]=useState({})
  const [updata,setupdata]=useState(initupdatedata)   // for update state //
  const [action,setaction]=useState("")

 // import of update code start here //

 const handleupdate=(e)=>{
  const {name,value}=e.target
   setupdata({
    ...updata,
    [name]:value
    })
    setaction("Updating....!")
 }

 const submitupdatedata=(e)=>{
  e.preventDefault()
  updateproducts(element._id)
 }

  const updateproducts=async(id)=>{
    setloading(true)
    try{
      const res = await axios.patch(`http://localhost:8080/products/${id}`,updata);
      console.log(res.data);
      setcount(count+1)
      onClose()
      setTimeout(()=>{
        setloading(false)
        setaction("Deleting....!")
        toast({
            title: res.data.message,
            description: res.data.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
       },2000)
      
  }
  catch(err)
  {
      console.log(err);
  }
  }
  

const {available,brand,category,description,discount,images,name,price,rating,reviews}=updata
//  const [Category,setCategory] = useState(category);
//  const categoryRef = useRef(null);
//  const [Name, setName] = useState(name);
//  const nameRef = useRef(null);
//  const [Brand, setBrand] = useState(brand);
//  const brandRef = useRef(null);
//  const [Description, setDescription] = useState(description);
//  const descriptionRef = useRef(null);
//  const [Price, setPrice] = useState(price);
//  const priceRef = useRef(null);
//  const [Discount, setDiscount] = useState(discount);
//  const discountRef = useRef(null);
//  const [Images, setImages] = useState(images);
//  const imagesRef = useRef(null);
//  const [Ratings, setRatings] = useState(ratings);
//  const ratingsRef = useRef(null);
//  const [Reviews,setReviews] = useState(reviews);
//  const reviewsRef = useRef(null);
//  const [Available, setAvailable] = useState(available);
//  const [message, setMessage] = useState('');



// import of update code ends here //

  useEffect(()=>{
      getuser()
  },[count])

  const getuser=()=>{
    axios.get(`${ENV.BASE_URL}/products/`)
    .then((res)=>{
        console.log(res.data)
        setuserdata(res.data)
      //  console.log("res.data.length",res.data.length)
        dispatch(TOTAL_PRODUCT(res.data.length))
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  const deleteuser=(id)=>{
    setloading(true)
     axios.delete(`${ENV.BASE_URL}/products/${id}`)
     .then((response)=>{
        console.log(response.data.message)
        setcount(count+1)
       //dispatch(TOTAL_PRODUCT(response.data.length))
       setTimeout(()=>{
        setloading(false)
        
        toast({
            title: response.data.message,
            description: response.data.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
       },2000)
     })
     .catch((err)=>{
        console.log(err)
     })
  }

   const handledeletebtn=(id)=>{
     onClose()
    console.log("el",id)
   deleteuser(id)
   }
 

   //   all update code start here //
          
//    const updateProduct = useCallback(async () => {
//     if(!Name)
//         nameRef.current.style.border = "1px solid red";
//     else
//         nameRef.current.style.border = "1px solid green";
//     if(!Category)
//         categoryRef.current.style.border="1px solid red";
//     else
//         categoryRef.current.style.border="1px solid green";
//     if(!Brand)
//         brandRef.current.style.border="1px solid red";
//     else
//         brandRef.current.style.border="1px solid green";
//     if(!Price)
//         priceRef.current.style.border="1px solid red";
//     else
//         priceRef.current.style.border="1px solid green";
//     if(!Discount)
//         discountRef.current.style.border="1px solid red";
//     else
//         discountRef.current.style.border="1px solid green";
//     if(!Ratings)
//         ratingsRef.current.style.border="1px solid red";
//     else
//         ratingsRef.current.style.border="1px solid green";
//     if(!Images)
//         imagesRef.current.style.border="1px solid red";
//     else
//         imagesRef.current.style.border="1px solid green";
//     if(!Description)
//         descriptionRef.current.style.border = "1px solid red";
//     else
//         descriptionRef.current.style.border = "1px solid green";
//     if(!Reviews)
//         reviewsRef.current.style.border="1px solid red";
//     else
//         reviewsRef.current.style.border="1px solid green";
//     if(Name && Brand && Category && Price && Discount && Ratings && Reviews && Images && Description)
//     {
//         if(Name!=name || Brand!=brand || Category!=category || Price!=price || Discount!=discount || Ratings!=ratings || Reviews!=reviews || Images!=images || Description!=Description || Available!=available)
//         {
//           setMessage('');
//           setLoading(true);
//           const productDetails = {
//               category : Category,
//               brand : Brand,
//               name : Name,
//               price : Price,
//               discount : Discount,
//               description : Description,
//               images : Images,
//               ratings : Ratings,
//               reviews  : Reviews,
//               available : Available
//           }
//           await updateProductApi(productDetails);
//           setLoading(false);
//           onClose();
//         }
//         else
//         {
//           setMessage('**No changes encountered');
//         }
//     }
//     else
//     {
//         setMessage('**All fields required');
//     }
// },[Brand,Category,Discount,Name,Ratings,Reviews,Price,Description,Available,Images,onClose])


//    const updateProductApi = async (details)=>{
//     try{
//         const res = await axios.patch(`http://localhost:8080/products/${el._id}`,details);
//         console.log(res.data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
//   }

     
       // all update code ends here //


       // try in diffreent way //

        
     const handleupdateopen=(el)=>{
       return  onOpen(),
      
        console.log("element",el),
       setelement(el)
       
     }
       // try end
  console.log(updata)
  console.log(userdata)
   if(loading) return <div className='loader'>
    <div className="wrapper">
        <Heading color={"gray"}>{action}</Heading >
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
   </div>
  return (
   <>
   <Heading>All Products</Heading>
    <div className='admindiv'>
        
        {userdata && userdata.map((el)=>{
            return  <div className="flip-card" key={el._id}>
            <div className="flip-card-inner" >
                <div className="flip-card-front">
                <Image src={el.images} alt="log" />
                    <p className="title">{el.name}</p>
                    <p>&#x20b9;{el.price}</p>
                </div>
                <div className="flip-card-back">
                    
                    <div className='backbtn'>
                    <a className="btn" onClick={()=> handleupdateopen(el)}>Update</a>
 <a className="btn"  onClick={()=>handledeletebtn(el._id)}>Delete</a> {/* pta nhi q modal me click krne pe sirf last element ja rha hai  */}
 
      { /*  Update Modal start */}

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
            <Text textAlign="center" size="lg" fontWeight="bold">Product Id : <Text fontWeight="bold" color="red" size="lg" as="span">{element ? element._id : "1"}</Text></Text>
            <form>
                <FormControl mb={4}>
                    <FormLabel>Select Category</FormLabel>
                    <Select  value={category} name="category" onChange={handleupdate}  placeholder="Select Category"  /*ref={categoryRef} */ >
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
                    <Input  value={brand} onChange={handleupdate} name="brand" placeholder='Product Brand Name' type="text" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Name</FormLabel>
                    <Input  value={name} onChange={handleupdate} name="name"  placeholder='Product Name' type="text" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Description</FormLabel>
                    <Textarea  value={description} onChange={handleupdate} name="description" placeholder='Product Description' />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Price</FormLabel>
                    <Input  value={price} name="price" onChange={handleupdate}  placeholder='Product Price' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Image Link</FormLabel>
                    <Input  value={images} name="images" onChange={handleupdate} placeholder='Product Image Link' type="text" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Discount</FormLabel>
                    <Input  value={discount} name="discount" onChange={handleupdate}  placeholder='Product Discount' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Ratings</FormLabel>
                    <Input  value={rating} name="rating" onChange={handleupdate}  placeholder='Product Ratings' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Product Reviews</FormLabel>
                    <Input  value={reviews} name="reviews" onChange={handleupdate} placeholder='Product Reviews' type="number" />
                </FormControl>
                <FormControl mb={4}>
                    <Checkbox colorScheme='green' /* isChecked={Available} onChange={(e)=>setAvailable(e.target.checked)} */ >
                        Available
                    </Checkbox>
                </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
          <Text color="red" fontSize="sm">{/*message */}</Text>
            <HStack>
                <Button colorScheme='red' variant={'ghost'} mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='solid' isLoading={loading}
    loadingText='Updating' colorScheme="green"  onClick={submitupdatedata} >Update</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

                    {/*  Update Modal end */}
                    </div>
                </div>
            </div>
          
        </div>
        })}
    </div>
    </>
  )
}

export default ProductPage