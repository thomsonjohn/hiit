import React, { FC } from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../../../Theme'
import MuscleGroup from '../../../../components/MuscleGroup'

import makeStyles from './MuscleOption.styles'

interface Props {
  option: {
    id: number
    group: string
    icon: string
    selected: boolean
  }
  onClick: (option: {}) => void
}

const MuscleOption: FC<Props> = ({ option, onClick }: Props) => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    option,
  })
  return (
    <div
      key={`muscleGroup-${option.id}`}
      className={css(styles.option)}
      onClick={(): void => onClick(option)}
    >
      <MuscleGroup primary={[option.icon]} secondary={[]} />
      <div className={css(styles.optionLabel)}>
        <span>{option.group}</span>
        {option.selected && <i className="material-icons">check_circle</i>}
      </div>
    </div>
  )
}

export default MuscleOption
