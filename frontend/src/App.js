
import './App.css';
import Shop from './pages/Shop';
import NavbarLeft from "./Components/NavbarLeft/NavbarLeft";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import CardPage from "./pages/CardPage";
import Login from "./pages/Login";
import DelivryPage from "./pages/DelivryPage";
import Saved from "./pages/Saved.jsx";
import Settings from "./pages/Settings";





function App() {
  return (
    <div>
            <BrowserRouter>
                 <NavbarLeft/>
                <Routes>
                    <Route path="/" element={<Shop/>}/>
                    <Route path="/phones" element={<ShopCategory Category="phones"/>}/>
                    <Route path="/laptops" element={<ShopCategory Category="laptops"/>}/>
                    <Route path="/mens" element={<ShopCategory Category="mens"/>}/>
                    <Route path="/womens" element={<ShopCategory Category="womens"/>}/>
                    <Route path="/products" element={<Product/>}/>
                    <Route path=":productID" element={<Product/>}/>

                    <Route path="/Card" element={<CardPage/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Delivry" element={<DelivryPage/>}/>
                    <Route path="/Saved" element={<Saved/>}/>
                    <Route path="/Settings" element={<Settings/>}/>


                </Routes>
             </BrowserRouter>
    </div>

  );
}

export default App;
