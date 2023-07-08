import React from 'react'
import CustomListGroup  from '../../components/ListGroup/ListGroup';
import Container from 'react-bootstrap/Container';
import  {useAppContext}  from '../../store/ContextApp';

const adpterItems = (items) => {
  return items.map(item => ({
    title: item.name,
    count: item.pins.length
  }))
}

const MinhasPastas = () => {
  const { state } = useAppContext();
  return (
    <Container>
        <CustomListGroup items={adpterItems(state.folders)}/>
    </Container>
  )
}

export default MinhasPastas