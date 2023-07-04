import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CardContainer } from '../../components/containers/CardContainer/Card';
import { Notification } from '../../components/Notification/Notification';
import ModalCreateFolder from '../../components/containers/ModalCreateFolder/ModalCreateFolder';
import { ModalSavePin } from '../../components/containers/ModalSavePin/ModalSavePin';
import  { useAppContext }  from '../../store/ContextApp';
import { saveFolderSuccessType } from '../../store/Types';



const HomePage = () => {

  const {state, dispatch} = useAppContext();
  const [ showFeedback, setShowFeedback ] = useState(false);

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type])

  return (
    <div>

      <ModalSavePin open={state.mode === 'savePin'} />
      <ModalCreateFolder open={state.mode === 'createFolder'}/>

      {showFeedback && ( 
      <Notification 
        message='Criado com sucesso'
        onClose={() => setShowFeedback(false)}
      />
      )}


      <Container fluid>
      <Row>
      <Col xs={12} md={3}>
          <CardContainer title={'ArtesLifes'} quantity={0} image={'https://i.pinimg.com/564x/f5/0b/e3/f50be3e44828d8856057fc163a4c1152.jpg'}/>
      </Col>
      <Col xs={12} md={3}>
          <CardContainer title={'ArtesLifes'} quantity={0} image={'https://i.pinimg.com/564x/ed/2c/bd/ed2cbd439a3043fcb41771f0dff536fc.jpg'}/>
      </Col>
      <Col xs={12} md={3}>
          <CardContainer title={'ArtesLifes'} quantity={0} image={'https://i.pinimg.com/564x/8b/64/56/8b6456d0268cec464a647ca4575f2686.jpg'}/>
      </Col>
      </Row>
    </Container>

    </div>


   
  )
}

export default HomePage