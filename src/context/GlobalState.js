import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
 
// initial app state
const initialState = {
    transactions: [
        { id: 1, text: 'Salario', amount: 2668.05 },
        { id: 2, text: 'Pensão', amount: 791.18 },
        { id: 3, text: 'Dizimo Erick', amount: -300},
        { id: 4, text: 'Dizimo mãe', amount: -80}
    ]
}

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}