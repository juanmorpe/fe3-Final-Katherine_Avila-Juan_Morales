import React from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

import './css/detail.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = ContextGlobal();
  const { id } = useParams();
  const dentist = state.data.find((d) => d.id === Number(id));

  if (!dentist) {
    return <div>No information found for this dentist.</div>;
  }
  return (
    <div className={`contact ${state.theme}`}>
      <h1>Detail Dentist {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className={`dentist-detail ${state.theme}`}>
        <h2>{dentist.name}</h2>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table className={`dentist-detail ${state.theme}`}>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentist.username}</td>
          <td>{dentist.email}</td>
          <td>{dentist.phone}</td>
          <td>{dentist.website}</td>
        </tr>
      </table>
    </div>
  )
}

export default Detail