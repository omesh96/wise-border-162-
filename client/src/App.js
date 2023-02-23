import "./App.css";
import Allroutes from "./Allroutes/Allroutes";
import Navbar from "./Component/Navbar";
import { Dropdown } from "./Component/Dropdown";
import Homepage from "./Page/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dropdown />
      <Homepage/>
      <Allroutes />
    </div>
  );
}

export default App;
