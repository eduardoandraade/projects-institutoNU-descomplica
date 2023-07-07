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
import { fetchPinsAction } from '../../store/Actions';




const HomePage = () => {

  const { state, dispatch} = useAppContext();
  const [ showFeedback, setShowFeedback ] = useState(false);

  const pinsNormalized = state.pins.map(pin => ({
    ...pin,
    quantity: state.folders.filter(folder => folder.pins.includes(pin.id)).length
  }));

  useEffect(() => {
    fetchPinsAction(dispatch);
  }, [])

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

        {pinsNormalized.map(pin => (
          <Col key={pin.id} xs={12} md={3}>
            <CardContainer {...pin}/>
          </Col>
        ))}
      
      

      </Row>
    </Container>

    </div>


   
  )
}

export default HomePage