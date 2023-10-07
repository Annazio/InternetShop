import React from 'react'
import { useCard } from '../../components/hooks/useCard';
import CardItem from '../../components/CardItem';
import ByCondition from '../../UI/ByCondition';
import EmptyCard from '../../components/EmptyCard';
import Container from '../../UI/Container';
import CardCalculation from '../../components/CardCalculation';

export default function CardPage(id) {
  const card = useCard()
  



  return (
    <Container>
        <div>
          {
            card.map(item => <CardItem key={item.id} {...item} />)
          }
        </div>
       
        <ByCondition condition={card.length === 0}>
             <EmptyCard />
        </ByCondition>
        <CardCalculation />
    </Container>
  )
}
