import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import Form from 'react-bootstrap/Form'
import  {useAppContext}  from '../../../store/ContextApp'
import { CloseModalAction, saveFolderAction } from '../../../store/Actions'

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
        handleClose();
    }

    const handleChange = (e) => {
        setFolderName(e.target.value);
    }


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
                loading: false,
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