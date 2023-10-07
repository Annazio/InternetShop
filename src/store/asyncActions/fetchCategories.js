import { loadAction } from "../reducer/categoriesReducer";


export const fetchCategories = async (dispatch) => {
    const resp = await fetch ('https://fakestoreapi.com/products/categories')
    const data = await resp.json();
    dispatch(loadAction(data)); 
} 