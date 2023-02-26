

import './App.css';

import Product from './Component/Product/Product';
import Sigleproduct from './Component/Product/Sigleproduct';

import "./App.css";
import Allroutes from "./Allroutes/Allroutes";
import Navbar from "./Component/Navbar";
import { Dropdown } from "./Component/Dropdown";
import Homepage from "./Page/Homepage";
import { Footer } from "./Page/Footer";


function App() {
  return (
    <div className="App">
 
      <Navbar />    
    <Allroutes />
    {/* <Sigleproduct/>
    <Product/> */}

     
      {/* <Dropdown />
      <Homepage />
  */}
      <Footer /> 
    

    </div>
  );
}

export default App;
