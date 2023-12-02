
import React, { useEffect } from 'react';
import Card from '../Components/Card';

import { fetchData } from '../Components/services/api';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = ContextGlobal();

  useEffect(() => {
    fetchData()
      .then((data) => {
        dispatch({ type: 'SET_DENTIST_DATA', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  return (
    <main className={`home ${state.theme}`} >
      <h1>List of Dentists</h1>
      <div className={`card-grid ${state.theme}`}>
        {state.data.map((dentist) => (
          <Card 
            key={dentist.id} 
            dentist={dentist} 
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
