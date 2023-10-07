import { useSelector } from "react-redux";


export function useCard(){
    const {card, products} = useSelector(state => state);
    if (products.length === 0) {
        return []
    }

    const result = card.map(item => {
        const product = products.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    return result
}