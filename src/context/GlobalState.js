import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
 
// initial app state
const initialState = {
    transactions: [
        { id: 1, text: 'Conta de luz', amount: -268 },
        { id: 2, text: 'Pensão', amount: 791.18 },
        { id: 3, text: 'Rancho supermercado', amount: -290}
    ]
}

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        { children }
    </GlobalContext.Provider>)
}