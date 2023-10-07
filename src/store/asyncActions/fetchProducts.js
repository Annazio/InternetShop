import { loadProductsAction } from "../reducer/productsReducer";

export const fetchProducts = async (dispatch) => {
    console.log('start');
    const resp = await fetch('https://fakestoreapi.com/products/')
    const data = await resp.json();
    console.log(data);
    dispatch(loadProductsAction(data)); 
} 