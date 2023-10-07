import React from 'react'
import { clearAction } from '../../store/reducer/cardReducer'
import { useDispatch } from 'react-redux'
import s from './style.module.css'
import ByCondition from '../../UI/ByCondition'
import { useCard } from '../hooks/useCard'

export default function CardCalculation(id) {
    const dispatch = useDispatch()
    const card = useCard();
    const totalSum = card.reduce((acc, {count, price}) => acc + count * price, 0) 


  return (
    <div className={s.container}>
         <ByCondition condition={card.length !== 0}>
              {<button onClick={() => dispatch(clearAction(id))}>Alle Artikel entfernen</button>}
              <p>{totalSum}</p>
        </ByCondition>
        
    </div>
  )
  }