import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  active: IStyle
  navBar: IStyle
  link: object
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    active: {
      borderBottom: `2px solid ${theme.color.secondary}`,
    },
    navBar: {
      alignItems: 'center',
      display: 'flex',
    },
    link: {
      color: theme.color.textOnPrimary,
      textDecoration: 'none',
      padding: theme.spacing.normal,
      cursor: 'pointer',
      ...theme.font.button,
      ':hover': {
        color: theme.color.secondary,
      },
      transition: 'color ease-in 0.3s',
    },
  }
}

export default makeStyles
