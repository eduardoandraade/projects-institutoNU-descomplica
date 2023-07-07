import { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useAppContext } from '../../../store/ContextApp'
import { CloseModalAction } from '../../../store/Actions'
import { 
    fetchFoldersAction, 
    OpenModalCreateFolderAction,
    savePinInFolderAction,
    } from '../../../store/Actions'

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();
    const [ itensLoading, setItensLoadgin] = useState({});

    const handleClose = () => {
        console.log('fechando!')
        dispatch(CloseModalAction())
    }

    const handleClickCreateFolder = () => {
        console.log('Clicou em criar pasta')

        dispatch(OpenModalCreateFolderAction());
    };

    const handleClick = async (folderId) => {
        setItensLoadgin((prevState) => {
            return {
                ...prevState,
                [folderId]: true
            }
        });

        await savePinInFolderAction(dispatch, state.activePinId, folderId);


        setItensLoadgin({
            ...itensLoading,
            [folderId]: false
        });
    };

    const foldersNormalized = state.folders.map(folder => {
        return ({
            ...folder,
            saved: folder.pins.includes(state.activePinId)
        })
    })

    useEffect(() => {
        fetchFoldersAction(dispatch);
        }, [])

 

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
                {foldersNormalized.map((folder, folderIndex) => (
                    <ListGroup.Item key={folderIndex} >
                        <Row>
                            <Col xs={8}>{folder.name}</Col>
                            <Col xs={4} className='text-end' >
                                <Button 
                                    label= {folder.saved ? 'Salvo' : 'Salvar'} 
                                    loadingLabel='Salvando' 
                                    onClick={() => handleClick(folder.id)}
                                    variant={folder.saved ? 'secondary' : 'primary'}
                                    disbled={folder.saved}
                                    loading={itensLoading[folder.id]}
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </Modal>
    )
}