import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ModalSavePin = ({ open }) => {
    return ( 
        <Modal 
            title='Salvar Pin' 
            open={open} 
            controls={[
                {
                    label: 'Criar Pasta',
                    variant: 'secondary',
                    loading: false,
                    loadingLabel: 'pasta',
                    onClick: () => {
                        console.log('Clicou em criar pasta');
                    }

                }
            ]}>
               
            <ListGroup as="ul">
                <ListGroup.Item >
                    <Row>
                        <Col xs={8}>Styles</Col>
                        <Col xs={4} className='text-end' ><Button label='Salvar' loadingLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item >
                    <Row>
                        <Col xs={8}>Styles</Col>
                        <Col xs={4} className='text-end' ><Button label='Salvar' loadingLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item >
                    <Row>
                        <Col xs={8}>Styles</Col>
                        <Col xs={4} className='text-end' ><Button label='Salvar' loadingLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>

        </Modal>
    )
}