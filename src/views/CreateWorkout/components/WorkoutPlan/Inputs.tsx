import React, { FC, useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../../../context/GlobalState'
import { Theme } from '../../../../Theme'

import makeStyles from './Inputs.styles'

interface Props {
  isValid: {
    rounds: boolean
    moves: boolean
    work: boolean
    rest: boolean
  }
}

const Inputs: FC<Props> = ({ isValid }: Props): JSX.Element => {
  const { editOptions } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  const handleChange = (id: string, value: number): void => {
    editOptions(id, value)
  }

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.inputWrapper)}>
        <label>Rounds</label>
        <div className={css(styles.input)}>
          <input
            type="number"
            onChange={(event): void =>
              handleChange('rounds', parseInt(event.target.value))
            }
          />
          {isValid.rounds && <i className="material-icons">check_circle</i>}
        </div>
      </div>
      <div className={css(styles.inputWrapper)}>
        <label>Moves</label>
        <div className={css(styles.input)}>
          <input
            type="number"
            onChange={(event): void =>
              handleChange('moves', parseInt(event.target.value))
            }
          />
          {isValid.moves && <i className="material-icons">check_circle</i>}
        </div>
      </div>
      <div className={css(styles.inputWrapper)}>
        <label>Seconds of work</label>
        <div className={css(styles.input)}>
          <input
            type="number"
            onChange={(event): void =>
              handleChange('work', parseInt(event.target.value))
            }
          />
          {isValid.work && <i className="material-icons">check_circle</i>}
        </div>
      </div>
      <div className={css(styles.inputWrapper)}>
        <label>Seconds of rest</label>
        <div className={css(styles.input)}>
          <input
            type="number"
            onChange={(event): void =>
              handleChange('rest', parseInt(event.target.value))
            }
          />
          {isValid.rest && <i className="material-icons">check_circle</i>}
        </div>
      </div>
    </div>
  )
}

export default Inputs
