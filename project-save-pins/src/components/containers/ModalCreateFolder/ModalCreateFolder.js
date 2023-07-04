import React, { useState, useEffect } from 'react'
import Modal from '../../Modal/Modal'
import Form from 'react-bootstrap/Form'
import  {useAppContext}  from '../../../store/ContextApp'
import { CloseModalAction, saveFolderAction } from '../../../store/Actions'
import { saveFolderInitType, saveFolderSuccessType } from '../../../store/Types'


const ModalCreateFolder = ({ open }) => {
    const { state, dispatch } = useAppContext();
    const [ folderName, setFolderName ] = useState('');

    const handleClose = () => {
      dispatch(CloseModalAction());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Fez o submit de', folderName);
        saveFolderAction(dispatch, folderName);
        
    }

    const handleChange = (e) => {
        setFolderName(e.target.value);
    }

    useEffect(() => {
      if (state.type === saveFolderSuccessType) {
        handleClose();
      }
    }, [state.type])
  


  return (  
    <Modal
        open={open}
        title='Criar Pasta'
        onHide={handleClose}
        controls={[
            {
                label: 'Criar e Salvar',
                loadingLabel: 'Criando',
                variant: 'secondary',
                loading: state.type === saveFolderInitType,
                type: 'submit',
                form: 'form-create-pasta'
            }    
        ]}
    >

    <Form onSubmit={handleSubmit} id='form-create-pasta'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome da pasta</Form.Label>
        <Form.Control type="text" placeholder="Ex: Dicas de Programção" value={folderName} onChange={handleChange}/>
      </Form.Group>
    </Form>

    </Modal>
  )
}

export default ModalCreateFolder