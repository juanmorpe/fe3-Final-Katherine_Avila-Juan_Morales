import React from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = ContextGlobal();
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className={`favorites ${state.theme}`}>
      <h1>Your Favorite Dentists</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {Object.values(favorites).map((dentist) => (
          <Card 
            key={dentist.id} 
            dentist={dentist}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;