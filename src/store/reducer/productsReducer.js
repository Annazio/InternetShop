const initialState = []

const LOAD_PRODUCTS = '[PRODUCTS] LOAD';

export const loadProductsAction = (payload) => ({type: LOAD_PRODUCTS, payload});

export const productsReducer = (state = initialState, action) => {
    if (action.type === LOAD_PRODUCTS){
        return action.payload
    }
    return state
}