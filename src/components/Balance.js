import React, { useContext } from 'react'

// importing the global context
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    
    // getting transactions list from the global context
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div>
            <h4>Seu saldo:</h4>
            <h1 className={ total >= 0 ? 'plus' : 'minus'}>R$ {total}</h1>
        </div>
    )
}
