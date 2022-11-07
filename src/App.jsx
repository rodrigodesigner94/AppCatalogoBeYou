import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import React from 'react';
import RgstrProdcts from "./pages/registers/productRegister";
import NavTop from "./pages/componentsG/nav";
import RgstrCarrosel from "./pages/registers/carroselRegister";


function App() {
  

  return (
    <Router>
      <NavTop />
      <br/>
      <br/>      
      <br/>      
      <Routes>
      <Route element={<Home />} exact path="/" />
      <Route element={<RgstrProdcts />} path="/cadastrarProduto" />
      <Route element={<RgstrCarrosel/>} path="/cadastrarFoto" />
      </Routes>

    </Router>
    )
}

export default App
