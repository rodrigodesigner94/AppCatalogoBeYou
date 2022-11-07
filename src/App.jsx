import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import React from 'react';
import RgstrProdcts from "./pages/registerProducts";
import NavTop from "./pages/componentsG/nav";


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
      </Routes>

    </Router>
    )
}

export default App
