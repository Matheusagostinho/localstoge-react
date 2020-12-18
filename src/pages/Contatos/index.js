import React, { useState, useEffect } from 'react'
import AdicionarContatos from '../../components/AdicionarContatos'
import uuid from 'react-uuid'
import { AiFillDelete } from 'react-icons/ai'

function Contato() {
  const [contats, setContacts] = useState(
    JSON.parse(localStorage.getItem('contats')) || [],
  )

  function addContact(name, phone) {
    const id = uuid()
    setContacts([...contats, { id, name, phone }])
    // salvarNoArmazenamentoLocal()
  }

  // function salvarNoArmazenamentoLocal() {
  //   localStorage.setItem('contats', JSON.stringify(contats))
  // }

  useEffect(() => localStorage.setItem('contats', JSON.stringify(contats)), [
    contats,
  ])
  function removerContato(id) {
    setContacts(contats.filter((contact) => contact.id !== id))
    // salvarNoArmazenamentoLocal()
  }
  return (
    <div className="limiter">
      <div className="container-table100">
        <div className="wrap-table100">
          <AdicionarContatos add={addContact}></AdicionarContatos>
          <div className="table100">
            <table>
              <thead>
                <tr className="table100-head">
                  <th className="column1">Nome</th>
                  <th className="column2">Contato</th>
                  <th className="column3"></th>
                </tr>
              </thead>
              <tbody id="itensTabela">
                {contats.map((contact, pos) => (
                  <tr Key={contact.id}>
                    <td className="collum1"> {contact.name}</td>
                    <td className="collum2"> {contact.phone}</td>
                    <td className="collum3">
                      <button
                        className="btnmod btn btn-sm btn-primary"
                        onClick={(e) => {
                          e.preventDefault()
                          removerContato(contact.id)
                        }}
                      >
                        <AiFillDelete size="30" />
                        <div>Excluir</div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato
