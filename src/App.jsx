import React from "react";
import Register from "./pages/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login  from "./pages/Login";
import  About from "./pages/About";
import StartPage from "./pages/StartPage";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/">
          
          <Route index element={<StartPage/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
