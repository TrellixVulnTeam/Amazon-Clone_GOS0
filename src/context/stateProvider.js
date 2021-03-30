import React, { createContext, useContext, useReducer } from "react";

// Creates the data layer
export const StateContext = createContext();

// Wrap our app to provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);
