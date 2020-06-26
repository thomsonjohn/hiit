import React, { useContext } from 'react'
import { useFela } from 'react-fela'
import moment from 'moment'

import CTA from '../../../../components/Button/CTA'
import createWorkout from '../../../../utils/createWorkout'
import { GlobalContext } from '../../../../context/GlobalState'
import { Theme } from '../../../../Theme'

import Inputs from './Inputs'
import MuscleGroups from './MuscleGroups'
import makeStyles from './WorkoutPlan.styles'

const WorkoutPlan = (): JSX.Element => {
  const { options, groups, addWorkoutToState } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  const roundsValid = options.rounds >= 3 && options.rounds <= 10
  const movesValid = options.moves >= 3 && options.moves <= 10
  const workValid = options.work >= 30 && options.work <= 60
  const restValid = options.rest >= 30 && options.rest <= 120
  const allValid = roundsValid && movesValid && workValid && restValid

  const duration =
    options.rounds * (options.rest + options.moves * (options.work + 10))

  const formattedDuration = moment.duration(duration, 'seconds').humanize()

  const filteredGroups = groups.filter((group: { selected: boolean }) => {
    return group.selected === true
  })

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.card)}>
        <h2 className={css(styles.heading)}>Workout plan</h2>
        <div>
          <MuscleGroups />
          <Inputs
            isValid={{
              rounds: roundsValid,
              moves: movesValid,
              work: workValid,
              rest: restValid,
            }}
          />
        </div>
        <h2 className={css(styles.duration)}>
          Workout duration: {allValid ? formattedDuration : ''}
        </h2>
        <CTA
          text="Submit"
          disabled={!allValid}
          onClick={(): void =>
            addWorkoutToState(createWorkout(filteredGroups, options, duration))
          }
        />
      </div>
    </div>
  )
}

export default WorkoutPlan
