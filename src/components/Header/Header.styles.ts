import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  header: IStyle
  link: object
  title: object
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    header: {
      alignContent: 'center',
      backgroundColor: theme.color.dark,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      zIndex: 100,
    },
    link: {
      color: theme.color.textOnPrimary,
      textDecoration: 'none',
      cursor: 'pointer',
      ...theme.font.logo,
      ':hover': {
        color: theme.color.secondary,
      },
      transition: 'color ease-in 0.3s',
    },
    title: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: `${theme.spacing.normal} ${theme.spacing.xlarge}`,
    },
  }
}

export default makeStyles
