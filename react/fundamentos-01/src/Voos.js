import React from 'react'
import { useThemeContext } from './App';

const flight = [
    {
        id: '123',
        title: 'Volta ter. 19 de julho',
        details: [
            {
                id: '132',
                title: 'Espaço para as pernas dentro da média (76cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Peso da male até 8kg'
            }
        ]
    },
    {
        id: '151',
        title: '13:00 - 15:00',
        details: [
            {
                id: '132',
                title: 'Espaço para as pernas dentro da média (76cm)'
            },
            {
                id: '133',
                title: 'Saída USB no assento'
            },
            {
                id: '134',
                title: 'Vídeo sob demanda'
            },
            {
                id: '135',
                title: 'Peso da male até 8kg'
            }
        ]
    }
    
];

function ItemVooDetails({ details }) {

    const value = useThemeContext();

    return (
    <ul>
        {details.map(detail => {
            return (
                <li key={detail.id} style={{color: value.color, fontFamily: value.font}} >{detail.title}</li>
            )
        })}
    </ul>
  )
}

function ItemVoo({ title, children }) {
    return (
        <div className='itemVoo'>
            <header>
                <h3>{title}</h3>
            </header>
            <div className='voos-detalis'>
                {children}
            </div>
        </div>
    )
}


function Voos() {
    
  return (
    <div className='voos'>
        {flight.map(voo => {
             return (
             <ItemVoo key={voo.id} title={voo.title} >
                <ItemVooDetails details={voo.details} />
             </ItemVoo> 
             )
        })}
        </div>
  )
}

export default Voos;