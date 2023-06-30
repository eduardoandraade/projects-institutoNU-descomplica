import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../../components/Card/Card';
import { Notification } from '../../components/Notification/Notification';
import ModalCreateFolder from '../../components/containers/ModalCreateFolder/ModalCreateFolder';
import { ModalSavePin } from '../../components/containers/ModalSavePin/ModalSavePin';


const HomePage = () => {
  return (
    <div>

      <ModalSavePin open={false} />
      <ModalCreateFolder open={false}/>
      <Notification 
        message='Criado com sucesso'
        onClose={() => {
          console.log('clicou em fechar')
        }}
      />



      <Container fluid>
      <Row>
      <Col xs={12} md={3}>
          <Card title={'ArtesLifes'} quantity={0} image={'https://i.pinimg.com/564x/f5/0b/e3/f50be3e44828d8856057fc163a4c1152.jpg'}/>
        </Col>
      <Col xs={12} md={3}>
          <Card title={'ArtesLifes'} quantity={0} image={'https://i.pinimg.com/564x/ed/2c/bd/ed2cbd439a3043fcb41771f0dff536fc.jpg'}/>
      </Col>
      <Col xs={12} md={3}>
          <Card title={'ArtesLifes'} quantity={0} image={'https://i.pinimg.com/564x/8b/64/56/8b6456d0268cec464a647ca4575f2686.jpg'}/>
      </Col>
      </Row>
    </Container>

    </div>


   
  )
}

export default HomePage