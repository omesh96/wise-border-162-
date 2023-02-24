
import './App.css';
import Allroutes from './Allroutes/Allroutes';
import Product from './Component/Product/Product';
import Sigleproduct from './Component/Product/Sigleproduct';

function App() {
  return (
    <div className="App">
     
    <Allroutes />
    <Sigleproduct/>
    <Product/>
    </div>
  );
}

export default App;
