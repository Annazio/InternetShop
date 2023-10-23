import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import Container from '../../UI/Container';
import { addAction } from '../../store/reducer/cardReducer';
import Button from '../../UI/Button';

export default function SingleProductPage() {
    const {id} = useParams();
    const products = useSelector(({products}) => products.list);
    const dispatch = useDispatch()

    if (products.length === 0){
      return ''
    }
    const {image, title, description, price} = products.find(item => item.id === +id);

  return (
    <Container>
    <div className={s.product}>
      <img src={image} alt={title} />
      <div className={s.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={s.price}>
          <p>Preis: {price}</p>
          <Button onClick={() => dispatch(addAction(+id))}>Zum Warenkorb hinzufügen</Button>
        </div>
      </div>
    </div>
    </Container>
  )
}

