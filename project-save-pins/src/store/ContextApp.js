import { createContext, useContext, useReducer } from "react";
import {reducer} from './Reducer'


export const Context = createContext({});

export const useAppContext = () => useContext(Context)

const ContextApp = ( { children, initialState }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
    
  )
}

export default ContextApp