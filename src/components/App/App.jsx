import { Route, Routes } from "react-router-dom";
import CategoryPage from "../../pages/CategoryPage";
import CardPage from "../../pages/CardPage";
import ProductsPage from "../../pages/ProductsPage";
import Nav from "../Nav";
import './style.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/asyncActions/fetchCategories";
import { fetchProducts } from "../../store/asyncActions/fetchProducts";
import CategoryProductPage from "../../pages/CategoryProductPage";
import SingleProductPage from "../../pages/SingleProductPage";



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchProducts)
  }, [])

  return (
   <div>
     <Nav />
     <Routes>
         <Route path="/" element={<CategoryPage />} />
         <Route path="/card" element={<CardPage />} />
         <Route path="/products" element={<ProductsPage />} />
         <Route path="/category/:category" element={<CategoryProductPage />} />
         <Route path="/product/:id" element={<SingleProductPage />} />
     </Routes>
   </div>
  );
}

export default App;
