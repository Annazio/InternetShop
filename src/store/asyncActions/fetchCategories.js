import { changeStatusAction, loadAction } from "../reducer/categoriesReducer";


export const fetchCategories = async (dispatch) => {
    dispatch(changeStatusAction('loading'));
    const resp = await fetch ('https://fakestoreapi.com/products/categories')
    const result = await resp.text();

    if(result !== ''){
        const data = JSON.parse(result);
        dispatch(loadAction(data)); 
    }else{
        dispatch(changeStatusAction('error'));
    }
}