/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default (state, action) => {
  switch (action.type) {
    case 'EDIT_GROUP':
      const updatedGroup = action.payload.group

      const updatedGroups = state.groups.map((group) => {
        if (group.id === updatedGroup.id) {
          return updatedGroup
        }
        return group
      })

      return {
        ...state,
        groups: updatedGroups,
      }

    case 'EDIT_OPTIONS':
      const updatedKey = action.payload.key
      const updatedValue = action.payload.value

      return {
        ...state,
        options: {
          ...state.options,
          [updatedKey]: updatedValue,
        },
      }

    case 'ADD_WORKOUT_TO_STATE':
      const workout = action.payload.workout

      return {
        ...state,
        workout,
      }

    default:
      return state
  }
}
