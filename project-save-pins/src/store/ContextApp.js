import { createContext, useContext } from "react";


export const Context = createContext({});

export const useAppContext = () => useContext(Context)

const ContextApp = ( { children }) => {
  return (
    <Context.Provider value={{ name: 'PinSave' }}>
        {children}
    </Context.Provider>
    
  )
}

export default ContextApp