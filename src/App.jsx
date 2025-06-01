import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

import Business from "./LandingPages/Business";
import MyTrip from "./LandingPages/MyTrip";


import Home from "./Home/Home";
import HomePage from "./LandingPages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/Business" element={<Business />} />
        <Route path="/MyTrip" element={<MyTrip />} />
       
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
