import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import WorkoutPlan from './components/WorkoutPlan'
import makeStyles from './CreateWorkout.styles'

interface Props {
  path: RouteComponentProps
}

const CreateWorkout: FC<Props> = () => {
  const { css } = useFela<Theme>()
  const styles = makeStyles()

  return (
    <div className={css(styles.content)}>
      <WorkoutPlan />
    </div>
  )
}

export default CreateWorkout
