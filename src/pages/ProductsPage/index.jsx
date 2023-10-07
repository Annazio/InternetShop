import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'
import Container from '../../UI/Container'

export default function ProductsPage() {

    const products = useSelector(({products}) => products)

  return (
    <Container>
        <div className={s.container}>
            {
                products.map(product => <ProductItem key={product.id} {...product}/>)
            }
        </div>
    </Container>
  )
}
