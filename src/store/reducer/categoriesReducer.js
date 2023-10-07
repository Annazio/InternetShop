const initialState = [];

const LOAD = '[CATEGORIES] LOAD'

export const loadAction = (payload) => ({type: LOAD, payload});

export const categoriesReducer = (state = initialState, action) => {
    if (action.type === LOAD ){
        return action.payload;
    }
    return state
}