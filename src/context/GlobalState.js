/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

import moves from '../data/exercises'

const initialState = {
  moves,
}

export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        moves: state.moves,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
