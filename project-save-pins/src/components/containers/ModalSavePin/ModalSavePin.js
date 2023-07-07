import { useEffect } from 'react'
import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useAppContext } from '../../../store/ContextApp'
import { CloseModalAction } from '../../../store/Actions'
import { fetchFoldersAction, OpenModalCreateFolderAction } from '../../../store/Actions'

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();

    const handleClose = () => {
        console.log('fechando!')
        dispatch(CloseModalAction())
    }

    const handleClickCreateFolder = () => {
        console.log('Clicou em criar pasta')

        dispatch(OpenModalCreateFolderAction());
    };

    useEffect(() => {
        fetchFoldersAction(dispatch);
        }, [])

    useEffect(() => {
        console.log(state)
    }, [state])



    return ( 
        <Modal 
            title='Salvar Pin' 
            open={open} 
            onHide={handleClose}
            controls={[
                {
                    label: 'Criar Pasta',
                    variant: 'secondary',
                    loading: false,
                    loadingLabel: 'pasta',
                    onClick: handleClickCreateFolder

                }
            ]}>
               
            <ListGroup variant="flush">
                {state.folders.map((folder, folderIndex) => (
                    <ListGroup.Item key={folderIndex} >
                        <Row>
                            <Col xs={8}>{folder.name}</Col>
                            <Col xs={4} className='text-end' ><Button label='Salvar' loadingLabel='Salvando' /></Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </Modal>
    )
}