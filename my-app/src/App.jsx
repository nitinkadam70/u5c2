import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [showFrom,setShowFrom] = useState(true)
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>setShowFrom(!showFrom)}>
        {/* Show text Add House or Show Rentals based on state */}
        {!showFrom ? "Add House" : "Show Rentals"}
      </button>
      {showFrom && <AddHouse/>}
      {/* Show component based on state */}
      <br />
      <Rentals/>
    </div>
  );
}

export default App;
