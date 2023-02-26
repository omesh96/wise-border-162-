


import './App.css';

import Allroutes from './Allroutes/Allroutes';
//import Product from './Component/Product/Product';


import Product from './Component/Product/Product';
import Sigleproduct from './Component/Product/Sigleproduct';
import "./App.css";
import Navbar from "./Component/Navbar";
import { Dropdown } from "./Component/Dropdown";
import Homepage from "./Page/Homepage";
import { Footer } from "./Page/Footer";
import { useSelector } from 'react-redux';
import { getCartProducts } from './Redux/Cart/cart.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {

  const cart = useSelector((store) => store.cartManager.data);
  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [])
  

  return (
    <div className="App">
<<<<<<< HEAD

     
   
    {/* <Sigleproduct/> */}

      <Navbar />
      <Dropdown />
      <Allroutes />
      {/* <Product/> */}
      {/* <Homepage /> */}
      <Footer />
=======
 
      <Navbar />    
    <Allroutes />
    <Footer /> 
>>>>>>> 43eff002fbcf48df6462ca845cbc3d217bd46d87

    </div>
  );
}

export default App;
