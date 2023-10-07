const ADD = '[CARD] ADD';
const INCR = '[CARD] INCR';
const DECR = '[CARD] DECR';
const CLEAR = '[CARD] CLEAR';


export const addAction = (payload) => ({type: ADD, payload})
export const incrAction = (payload) => ({type: INCR, payload})
export const decrAction = (payload) => ({type: DECR, payload})
export const clearAction = () => ({type: CLEAR})

export const cardReducer = (state = [], action) => {
    if (action.type === ADD){
        const target = state.find(({id}) => id === action.payload);
        if (target){
            target.count++
            return [...state]
        }else{
            return [...state, {id: action.payload, count: 1}]
        }
    }else if (action.type === INCR){
        const target = state.find(({id}) => id === action.payload);
            target.count++
            return [...state]

    }else if (action.type === DECR){
        const target = state.find(({id}) => id === action.payload);
            if(target.count === 1){
             return state.filter(({id}) => id !== action.payload)
            }else{
                target.count--
                return [...state]
            }
    
    } else if (action.type === CLEAR){
        return []
    }
    return state
}