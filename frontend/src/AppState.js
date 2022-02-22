import React from 'react';
import { useContext, useReducer } from 'react';

// initialState
const initialState = {
  url: "http://localhost:8000/api/v1",
  token: null,
  username: null,
}

// Reducer 
// action = {type: "", payload: ---}
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "auth":
      newState = { ...state, ...action.payload }
      return newState;

    case "signup":
      newState = { ...state, ...action.payload }
      return newState;

    case "logout":
      newState = { ...state, token: null, username: null }
      window.localStorage.removeItem("auth")
      return newState;

    default: 
      return state;
  }
}

// AppContext
const AppContext = React.createContext(null)

// AppState Component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>
};

// useAppState hook
export const useAppState = () => {
  return React.useContext(AppContext)
}