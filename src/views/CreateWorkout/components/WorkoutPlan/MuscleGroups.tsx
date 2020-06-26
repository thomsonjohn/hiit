import React, { useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../../../context/GlobalState'
import { Theme } from '../../../../Theme'

import MuscleOption from '../MuscleOption'
import makeStyles from './WorkoutPlan.styles'

const MuscleGroups = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  const { groups, editGroup } = useContext(GlobalContext)

  const toggleSelected = (group: { selected: boolean }): void => {
    const updatedGroup = { ...group, selected: !group.selected }
    editGroup(updatedGroup)
  }

  return (
    <div className={css(styles.muscleGroup)}>
      {groups.map(
        (option: {
          id: number
          group: string
          icon: string
          selected: boolean
        }) => {
          return (
            <MuscleOption
              key={`muscleOption-${option.id}`}
              option={option}
              onClick={(): void => toggleSelected(option)}
            />
          )
        }
      )}
    </div>
  )
}

export default MuscleGroups
