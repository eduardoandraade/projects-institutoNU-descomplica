import React, { createContext, useContext, useState } from 'react'
import Voos from "./Voos.js"
import { AssentosBus } from './AssentosBus.js'
import { ViaCep } from "./ViaCep.js"
import Fonts from './Fonts.js'
import Form from './Form.js'





const Title = () => {

  

    return (
    
    <h2>
      <span>Olá, </span>
      <strong>mundo</strong>
      !!
    </h2>
    )
}

function MyBtn(props){
  return (
    <button onClick={function(){
      console.log('clicou')
    }} type='button'>{props.label} - Idade: {props.age}</button>
  )
}

function AgePeople(props) {
  return (
    <strong>{props.label}</strong>
  )
}

function People(props){
  
  return (
    <section>
      Você é {props.idade >= 18 ? <AgePeople label='de maior' /> : <AgePeople label='menor de idade' />}
    </section>
  )
}

function ListItem({ label }) {
  return (
    <li>{ label }</li>
  )

}

function List(){
  const steps = [
    'Configurar projeto',
    'Embedar React',
    'Criar componentes',
    'Escrever testes',
    'Fazer deploy'
  ]

  return (
    <ul>
      {steps.map(function(value, index) {
        return <ListItem key={index} label={value}/>
      })}

    </ul>
  )
}

export const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

const SettingsContext = createContext({});
export const useSettingsContext = () => useContext(SettingsContext);


function App() {
  const [ font, setFont ] = useState('arial');

  const labelBtn = 'Entre aqui'

  return (
    
    <SettingsContext.Provider value={{ cepUrlBase: 'https://viacep.com.br'}}>
      <ThemeContext.Provider value={{color: 'red ', font, setFont}}>
      
      <div className="App">

          <Fonts />
          <Title />
          <Form />
          <ViaCep />
          <AssentosBus />
          <MyBtn label={`${labelBtn}!`} age={26}/>
          <Voos />
          <List />
          <People idade={22} />
          <People idade={1} />
          <People idade={12} />
          <People idade={23} />
          <article>
            <h2>Subtitulo</h2>
            <p>elemento p</p>
          </article>

     </div>

     </ThemeContext.Provider>
     </SettingsContext.Provider>
    
    
  );
}

export default App;
