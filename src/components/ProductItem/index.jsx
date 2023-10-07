import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/cardReducer';

export default function ProductItem({id, image, title, description}) {
  const dispatch = useDispatch();
  const addProduct = () => dispatch(addAction(id));

  return (
    <div className={s.item}>
        <img src={image} alt={title} />
        <p>{description}</p>
        <button onClick={addProduct}>Zum Warenkorb hinzufügen</button>
    </div>
  )
}
