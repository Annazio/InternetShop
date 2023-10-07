import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function SingleProductPage() {
    const {id} = useParams();
    const products = useSelector(({products}) => products);
    const result = products.find(product => product.id === id)

  return (
    <div>
        <p></p> 
    </div>
  )
}

