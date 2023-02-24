

import './App.css';
import Allroutes from './Allroutes/Allroutes';
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

     
    <Allroutes />
    <Sigleproduct/>
    <Product/>

      <Navbar />
      <Dropdown />
      <Homepage />
      <Footer />
      <Allroutes />

    </div>
  );
}

export default App;
