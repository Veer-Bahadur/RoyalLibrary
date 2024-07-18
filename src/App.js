import { BrowserRouter, Routes, Route } from "react-router-dom"
import Store from "./Store";
import Home from "./components/components/home/Home";
import AddStudent from "./components/components/about/AddStudent";
import Navbar from "./components/components/navbar/navbar";
function App() {
  return (
    <BrowserRouter>
      <Store>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/addStudent" Component={AddStudent} />
        </Routes>
      </Store>
    </BrowserRouter>
  );
}

export default App;
