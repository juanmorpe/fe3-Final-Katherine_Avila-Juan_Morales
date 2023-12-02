import React, { createContext, useReducer, useContext, useMemo } from 'react';

const SET_THEME = 'SET_THEME';
const SET_DENTIST_DATA = 'SET_DENTIST_DATA';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const INIT_FAVORITES = 'INIT_FAVORITES';

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem('theme', action.payload);
      return { 
        ...state, theme: action.payload 
      };
    case SET_DENTIST_DATA:
      return { 
        ...state, data: action.payload 
      };
    case INIT_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };      
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      console.log('state.favorites=====>',state.favorites);
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };      
    default:
      return state;
  }
};

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
  favorites: [],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const ContextGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('ContextGlobal must be used within a GlobalProvider');
  }
  return context;
};
