import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Container from '../../UI/Container';
import s from "./style.module.css"
import ProductItem from './../../components/ProductItem'

export default function CategoryProductPage() {
  const {category} = useParams(); 
  const products = useSelector(({products}) => products.list);
  const result = products.filter(product => product.category === category)
  
  return (
    <Container>
      <h2 className={s.h2}>{category}</h2>
      <div className={s.products}>
        {
            result.map(product => <ProductItem key={product.id} {...product} descr={true}/>)
        }
      </div>
    </Container>
  )
}

