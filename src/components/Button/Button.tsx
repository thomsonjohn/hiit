import React from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import makeStyles from './Button.styles'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })
  return <button className={css(styles.button)}>{text}</button>
}

export default Button
