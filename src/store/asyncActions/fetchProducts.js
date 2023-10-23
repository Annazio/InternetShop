import { loadProductsAction, changeStatusAction } from "../reducer/productsReducer";



export const fetchProducts = async (dispatch) => {
    dispatch(changeStatusAction('loading'));
    const resp = await fetch ('https://fakestoreapi.com/products/')
    const result = await resp.text();

    if(result !== ''){
        const data = JSON.parse(result);
        dispatch(loadProductsAction(data)); 
    } else{
    dispatch(changeStatusAction('error'));
    }
}