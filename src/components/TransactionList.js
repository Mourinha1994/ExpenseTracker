import React from 'react'

// importing custom components
import { AddTransaction } from './AddTransaction'

export const TransactionList = () => {
    return (
        <div className="container">
            <h3>Histórico:</h3>
            <ul className="list">
                <li className="minus">
                    Internet <span>- R$ 128,00</span> <button className="delete-btn">x</button>
                </li>
            </ul>
            <AddTransaction />
        </div>
    )
}
