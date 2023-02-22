import "./App.css";
import Allroutes from "./Allroutes/Allroutes";
import Navbar from "./Component/Navbar";
import { Dropdown } from "./Component/Dropdown";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dropdown />
      <Allroutes />
    </div>
  );
}

export default App;
