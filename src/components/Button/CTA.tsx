import React from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import makeStyles from './Button.styles'

interface ButtonProps {
  disabled?: boolean
  text: string
  onClick?: () => void
}

const CTA = ({ disabled, text, onClick }: ButtonProps): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    disabled,
  })

  return (
    <button
      disabled={disabled}
      type="button"
      className={css(styles.button)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CTA
