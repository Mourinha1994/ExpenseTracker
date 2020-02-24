import React, { useState } from 'react'

export const AddTransaction = () => {

    // creating states for the AddTransaction component
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <h3>Nova transação</h3>
            <form>
                <div className="form-control">
                    <small><label>Descrição</label></small>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Descreva aqui a sua despesa/receita..." />
                </div>
                <div className="form-control">
                    <small><label>Valor</label> (negativo - despesa, positivo - renda)</small>
                    <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="Digite o valor" />
                </div>
                <div className="form-control">
                    <button className="btn">Adicionar</button>
                </div>
            </form>
        </div>
    )
}
