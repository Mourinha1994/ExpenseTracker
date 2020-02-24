import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h3>Histórico:</h3>
            <ul className="list">
                <li className="minus">
                    Internet <span>- R$ 128,00</span> <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
