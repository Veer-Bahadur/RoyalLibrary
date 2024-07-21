import { BrowserRouter, Routes, Route } from "react-router-dom"
import Store from "./Store";
import "./App.css"
import Home from "./components/components/home/Home";
import AddStudent from "./components/components/about/AddStudent";
import Navbar from "./components/components/navbar/navbar";
import SeatAllocation from "./components/components/seats/SeatAllocation";
function App() {
  return (
    <BrowserRouter>
      <Store>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/addStudent" Component={AddStudent} />
          <Route path="/seatAllocation" Component={SeatAllocation} />
        </Routes>
      </Store>
    </BrowserRouter>
  );
}

export default App;
