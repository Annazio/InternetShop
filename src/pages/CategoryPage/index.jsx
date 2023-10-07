import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'
import s from './style.module.css'
import Container from '../../UI/Container'

export default function CategoryPage() {

  const categories = useSelector(({categories}) => categories)


  return (
    <Container>
      <h1>Der Beste Laden mit den schönsten Sachen </h1>
        <div className={s.categories}>
            {
              categories.map(category => <CategoryItem key={category} category={category}/>)
            }
        </div>
    </Container>
  )
}
