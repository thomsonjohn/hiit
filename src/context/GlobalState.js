/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

import moves from '../data/exercises'
import groups from '../data/groups'

const initialState = {
  moves,
  groups,
  options: {
    rounds: 0,
    moves: 0,
    work: 0,
    rest: 0,
  },
  workout: {
    work: 0,
    rest: 0,
    rounds: 0,
    moves: [],
    duration: 0,
  },
}

export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function editGroup(group) {
    dispatch({
      type: 'EDIT_GROUP',
      payload: { group: group },
    })
  }

  function editOptions(key, value) {
    dispatch({
      type: 'EDIT_OPTIONS',
      payload: { key, value },
    })
  }

  function addWorkoutToState(workout) {
    dispatch({
      type: 'ADD_WORKOUT_TO_STATE',
      payload: { workout },
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        moves: state.moves,
        groups: state.groups,
        options: state.options,
        workout: state.workout,
        editGroup,
        editOptions,
        addWorkoutToState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
