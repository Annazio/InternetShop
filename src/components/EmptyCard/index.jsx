import React from 'react'
import s from './style.module.css'

export default function EmptyCard() {
  return (
    <div>
        <p className={s.text_style}>Ihr Warenkorb ist noch leer</p>
    </div>
  )
}
