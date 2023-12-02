import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";


import "./css/card.css";

const Card = ({ dentist }) => {
  const { state, dispatch } = ContextGlobal();
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isDentistFavorite = storedFavorites[dentist.id];

  const [heartColor, setHeartColor] = useState("🤍");

  useEffect(() => {
    setHeartColor(isDentistFavorite ? '❤️' : '🤍');
  }, [state.favorites, dentist.id]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'INIT_FAVORITES', payload: storedFavorites });
  }, []); 

  const toggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: dentist.id });
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
    if (heartColor === '❤️') {
      delete favorites[dentist.id];
      const updatedFavoritesString = JSON.stringify(favorites);
      localStorage.removeItem("favorites");
      localStorage.setItem("favorites", updatedFavoritesString);
      setHeartColor('🤍');
    }else{
      favorites[dentist.id] = dentist;
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setHeartColor('❤️');
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${dentist.id}`}>
        <img src="./img/doctor.jpg" alt="doctor" />
        <h3>{dentist.name}</h3>
        <p>Username: {dentist.username}</p>
        <p>ID: {dentist.id}</p>
      </Link>
      <button 
        onClick={toggleFavorite} 
        className="favButton"
      >
        {heartColor}
      </button>
    </div>
  );
};

export default Card;