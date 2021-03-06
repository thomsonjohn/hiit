import React from 'react'
import { useFela } from 'react-fela'
import { Link } from '@reach/router'

import { Theme } from '../../Theme'

import makeStyles from './Button.styles'

interface ButtonProps {
  path?: string
  text: string
  onClick?: () => void
}

const Button = ({ path, text, onClick }: ButtonProps): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })
  if (path) {
    return (
      <Link to={path} className={css(styles.button)}>
        {text}
      </Link>
    )
  }
  return (
    <button className={css(styles.button)} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
