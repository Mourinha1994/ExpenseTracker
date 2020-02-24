import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Renda</h4>
                <p className="money plus">+ R$ 0,00</p>
            </div>
            <div>
                <h4>Despesas</h4>
                <p className="money minus">- R$ 0,00</p>
            </div>
        </div>
    )
}
