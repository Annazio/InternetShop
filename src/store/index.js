import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoriesReducer } from "./reducer/categoriesReducer";
import  ThunkMiddleware  from "redux-thunk";
import { productsReducer } from "./reducer/productsReducer.js";
import { cardReducer } from "./reducer/cardReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    card: cardReducer
})

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

