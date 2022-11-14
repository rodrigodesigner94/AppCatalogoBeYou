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
import Admin from "./pages/admin";
import RgstrConsumer  from "./pages/consumerRegister";


function App() {
  

  return (
    <Router>
      <NavTop />
      <br/>
      <br/>      
      <br/>      
      <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<RgstrProdcts />} path="/cadastrarproduto" />
      <Route element={<RgstrCarrosel/>} path="/cadastrarfoto" />
      <Route element={<Admin/>} path="/admin" />
      <Route element={<RgstrConsumer/>} path="/cadastrarcliente" />
      
      </Routes>

    </Router>
    )
}

export default App
