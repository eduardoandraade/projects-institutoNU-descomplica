import React from 'react'
import Alert from 'react-bootstrap/Alert'
import ReactDOM  from 'react-dom'
import './notification.css'

export const Notification = ({ message, variant = 'success', onClose}) => {
  return ReactDOM.createPortal(
    <div className='notification'>
        <Alert variant={variant} onClose={onClose} dismissible>
          {message}
        </Alert>    
    </div>,
        document.body
  )
}
