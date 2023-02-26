


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

  const cart = useSelector((store)=>store.cartManager.data);
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
      <Product/>
      <Homepage />
      <Footer />
      <Allroutes />
=======
 
      <Navbar />    
    <Allroutes />
    <Footer /> 
    
>>>>>>> b5e5ac6baa1cff8035212ebc2515e0ded4248578

    </div>
  );
}

export default App;
