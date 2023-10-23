import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/cardReducer';
import Button from '../../UI/Button';
import ByCondition from '../../UI/ByCondition'

export default function ProductItem({id, image, title, description, descr}) {
  const dispatch = useDispatch();
  const addProduct = () => dispatch(addAction(id));

  return (
    <div className={s.item}>
        <img src={image} alt={title} />
        <p>{description}</p>
        <div className={s.btns}>
            <Button onClick={addProduct}>Zum Warenkorb hinzufügen</Button>
            <ByCondition condition ={descr}>
              <Button type={'Link'} to={`/product/${id}`}>Mehr erfahren</Button>
            </ByCondition>
        </div>
    </div>
  )
}
