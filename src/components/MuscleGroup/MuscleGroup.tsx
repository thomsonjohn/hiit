import React, { FC } from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'
import Figure from '../Figure'

import makeStyles from './MuscleGroup.styles'

type FigureProps = {
  primary: string[]
  secondary: string[]
}

const MuscleGroup: FC<FigureProps> = ({ primary, secondary }: FigureProps) => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    primary,
    secondary,
  })
  return (
    <div className={css(styles.muscleGroup)}>
      <Figure primary={primary} secondary={[]} />
    </div>
  )
}

export default MuscleGroup
