import React from "react";
import Register from "./pages/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login  from "./pages/Login";
import  About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/">
          
          <Route index element={<About/>}></Route>
        </Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
