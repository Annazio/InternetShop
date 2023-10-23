const initialState = {
    status: 'empty',
    list: []
}

const LOAD_PRODUCTS = '[PRODUCTS] LOAD';
const CHANGE_STATUS = '[PRODUCTS] CHANGE_STATUS';


export const loadProductsAction = (payload) => ({type: LOAD_PRODUCTS, payload});
export const changeStatusAction = (payload) => ({type: CHANGE_STATUS, payload});

export const productsReducer = (state = initialState, action) => {
    if (action.type === LOAD_PRODUCTS){
        return {
             status: 'ready',
             list: action.payload
        }
    }else if(action.type === CHANGE_STATUS){
        return{
            status: action.payload,
            list: state.list
        }
    }
    return state
}
