import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrAction, incrAction } from '../../store/reducer/cardReducer';
import Button from '../../UI/Button';

export default function CardItem({id, image, title, count, price}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price} X {count} = {price * count} €</p>
        <div className={s.count_btns}>
            <Button onClick={() => dispatch(incrAction(id))}>+</Button>
            <Button onClick={() => dispatch(decrAction(id))}>-</Button>
        </div>
        
    </div>
  )
}
