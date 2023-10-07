import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Container from '../../UI/Container';

export default function CategoryProductPage() {
  const {category} = useParams(); 
  const products = useSelector(({products}) => products);
  const result = products.filter(product => product.category === category)
  
  return (
    <Container>
        {
            result.map(product => <p key={product.id}> {product.title} </p>)
        }
    </Container>
  )
}
