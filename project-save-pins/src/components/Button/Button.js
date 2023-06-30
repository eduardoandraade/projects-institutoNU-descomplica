import React from 'react'
import ButtonBS from 'react-bootstrap/Button'
import { Spinner } from 'react-bootstrap'

const Button = ({ loading, label, loadingLabel, ...buttonsProps}) => {

  return (
    <ButtonBS {...buttonsProps}>
        {loading && (
            <>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                > 
                    <span className="visually-hidden">Loading...</span>
                </Spinner>{' '}
            </>
            
        )}
        {loading ? loadingLabel : label }
    </ButtonBS>
  )
}

export default Button