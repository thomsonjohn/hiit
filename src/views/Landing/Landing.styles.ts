import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  content: IStyle
  text: object
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    content: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing.xlarge,
      justifyContent: 'center',
    },
    text: {
      color: theme.color.textOnPrimary,
      ...theme.font.hero,
      '> span': {
        color: theme.color.secondary,
      },
    },
  }
}

export default makeStyles
