
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import Navba from "./nav";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navba />
      
      </div>
      <Routes>
        <Route path="/products" element={} />
      </Routes>
    </BrowserRouter>
    
  );
}
