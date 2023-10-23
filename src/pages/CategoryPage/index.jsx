import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'
import s from './style.module.css'
import Container from '../../UI/Container'

export default function CategoryPage() {

  const {status, list} = useSelector(({categories}) => categories)

  

  return (
    <Container>
      <h1>Der Beste Laden mit den schönsten Sachen </h1>
      {
        status === 'ready'
        ?
      
        <div className={s.categories}>
            {
              list.map(category => <CategoryItem key={category} category={category}/>)
            }
        </div>
        : status === 'error'
        ? <h2>Loading error</h2>
        :status === 'loading'
        ? <h2>Loading</h2>
        : ''
          }
    </Container>
  )
}
