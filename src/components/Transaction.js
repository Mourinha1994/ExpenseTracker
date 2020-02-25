import React, { useContext } from 'react'

// importing global context
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    
    // getting the delete transaction action
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                { transaction.text } 
                <span> {sign} R$ { Math.abs(transaction.amount) }</span> 
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}
