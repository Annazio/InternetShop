import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrAction, incrAction } from '../../store/reducer/cardReducer';

export default function CardItem({id, image, title, count, price}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price} X {count} = {price * count} €</p>
        <div className={s.count_btns}>
            <button onClick={() => dispatch(incrAction(id))}>+</button>
            <button onClick={() => dispatch(decrAction(id))}>-</button>
        </div>
        
    </div>
  )
}
