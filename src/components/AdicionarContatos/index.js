import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

function AdicionarContatos({ add }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  function submitForm(e) {
    e.preventDefault()
    add(name, phone)
    setName('')
    setPhone('')
  }

  return (
    <div className="add">
      <div id="title">
        <h3>Adicione um novo contato!</h3>
      </div>
      <form className="row" onSubmit={submitForm}>
        <div className="col-lg-3 col-sm-4">
          <div className="form-group has-default bmd-form-group">
            <input
              type="text"
              name="nome"
              className="form-control"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4">
          <div className="form-group has-default bmd-form-group">
            <input
              type="text"
              name="telefone"
              className="form-control"
              placeholder="Telefone "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4" id="btnAdicionar">
          <button className=" btn btn-primary">
            <AiFillPlusCircle /> Adicionar
            <div className="ripple-container"></div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdicionarContatos
