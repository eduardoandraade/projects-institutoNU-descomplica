import React, { useState, useRef } from 'react'

const Form = () => {

    const [ fieldValue, setFieldValue ] = useState({
        name: '',
        city: ''
    });

    const fieldCity = useRef(null);

    const handleChange = (e) => {
        console.log( e.target.name, e.target.value);
        setFieldValue({
            ...fieldValue,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(fieldCity.current.value);
    }


  return (
    <div>
        <form onSubmit={handleSubmit} action='https://google.com'>
        <input type='text' name='name' value={fieldValue.name} onChange={handleChange}/>
        <input type='text' name='city' ref={fieldCity}/>

        <button type='submit'>Enviar</button>
            
        </form>
    </div>
  )
}

export default Form