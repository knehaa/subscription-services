import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";
import Navbar from './components/NavBar/Navbar'
import Plans from './pages/Plans'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  // const [selectMonthly, setSelectMonthly] = useState(true);
  // console.log(selectMonthly);
  return (
    <><div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Plans/>}/>
        <Route path="Product" element={<Product/>}>
        <Route path='ProductId' element={<Product/>}/>
        </Route>
         <Route path='./Cart' element={<Cart/>}/> 
         <Route path='./Login' element={<Login/>}/> 
      </Routes>
      </BrowserRouter>
      
    </div>
    
    <div className="PricingApp">
        <div className="app-container">
          {/* Cards here */}
          <div className="pricing-cards">
            <PricingCard
              title="Basic"
              price="Free"
              storage="60 GB Storage"
              users="1"
              sendUp="1" />
            <PricingCard
              title="Standard"
              price="4999"
              storage="70 GB Storage"
              users="5"
              sendUp="5" />
            <PricingCard
              title="Plus"
              price="3999"
              storage="90 GB Storage"
              users="10" />
          </div>
        </div>
      </div>

      </>
  );
}

export default App;
