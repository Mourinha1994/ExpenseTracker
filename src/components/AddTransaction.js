import React from 'react'

export const AddTransaction = () => {
    return (
        <div className="container">
            <h3>Nova transação</h3>
            <form>
                <div className="form-control">
                    <small><label>Descrição</label></small>
                    <input type="text" placeholder="Descreva aqui a sua despesa/receita..." />
                </div>
                <div className="form-control">
                    <small><label>Valor</label> (negativo - despesa, positivo - renda)</small>
                    <input type="number" placeholder="Digite o valor" />
                </div>
                <div className="form-control">
                    <button className="btn">Adicionar</button>
                </div>
            </form>
        </div>
    )
}
