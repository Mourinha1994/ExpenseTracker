import React, { useContext } from 'react'

// importing the global state
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

    // getting all the transactions from state
    const { transactions } = useContext(GlobalContext)

    // getting all the amounts into an object
    const amounts = transactions.map(transaction => transaction.amount)

    // sum of incomes
    const incomes = amounts.filter(item => item > 0)
                          .reduce((acc, item) => (acc += item), 0)
                          .toFixed(2)
    
    // sum of expenses
    const expenses = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Renda</h4>
                <p className="money plus">R$ { incomes }</p>
            </div>
            <div>
                <h4>Despesas</h4>
                <p className="money minus">R$ { expenses }</p>
            </div>
        </div>
    )
}
