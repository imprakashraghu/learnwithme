// SETUP DATA LAYER

import React, { createContext, useContext, useReducer } from 'react';

// DATA LAYER
export const StateContext = createContext();

// PROVIDER
export const DataLayer = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// COMPONENT USAGE
export const useDataLayerValue = () => useContext(StateContext);