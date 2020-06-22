import React from 'react'
import { Link } from '@reach/router'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import makeStyles from './NavBar.styles'

const NavBar = () => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  const isActive = ({ isCurrent }: any): { className: string } | {} => {
    return isCurrent ? { className: css(styles.link, styles.active) } : {}
  }
  return (
    <div className={css(styles.navBar)}>
      <Link getProps={isActive} to="moves" className={css(styles.link)}>
        moves
      </Link>
      <Link getProps={isActive} to="workouts" className={css(styles.link)}>
        workouts
      </Link>
    </div>
  )
}

export default NavBar
