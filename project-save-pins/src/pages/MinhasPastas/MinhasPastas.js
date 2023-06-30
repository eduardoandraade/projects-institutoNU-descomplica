import React from 'react'
import CustomListGroup  from '../../components/ListGroup/ListGroup';
import Container from 'react-bootstrap/Container';

const MinhasPastas = () => {
  return (
    <Container>
        <CustomListGroup items={[
            {
                title: 'Programação',
                count: 3
            },
            {
                title: 'Desgin',
                count: 10
            }
            ]}/>
    </Container>
  )
}

export default MinhasPastas