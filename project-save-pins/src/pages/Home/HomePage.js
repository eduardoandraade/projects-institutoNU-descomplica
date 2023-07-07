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


const pinsData = [
  {
    id: '123',
    title: 'Design',
    image: 'https://i.pinimg.com/564x/f5/0b/e3/f50be3e44828d8856057fc163a4c1152.jpg',
    quantity: 0
  },
  {
    id: '133',
    title: 'Branding',
    image: 'https://i.pinimg.com/564x/aa/6f/d1/aa6fd19deafd7db051a6a77d81e1a4fe.jpg',
    quantity: 0
  },
  {
    id: '134',
    title: 'Minimalist',
    image: 'https://i.pinimg.com/564x/4a/1f/a0/4a1fa03129db75a667b0e1c2f9ccd349.jpg',
    quantity: 0
  },
  
]


const HomePage = () => {

  const { state, dispatch} = useAppContext();
  const [ showFeedback, setShowFeedback ] = useState(false);

  const pinsNormalized = pinsData.map(pin => ({
    ...pin,
    quantity: state.folders.filter(folder => folder.pins.includes(pin.id)).length
  }));

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