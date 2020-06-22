import React from 'react'
import { useFela } from 'react-fela'
import { Link } from '@reach/router'

import NavBar from '../NavBar'
import { Theme } from '../../Theme'

import makeStyles from './Header.styles'

const Header = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <header className={css(styles.header)}>
      <div className={css(styles.title)}>
        <Link to="/" className={css(styles.link)}>
          HIIT
        </Link>
      </div>
      <NavBar />
    </header>
  )
}

export default Header
