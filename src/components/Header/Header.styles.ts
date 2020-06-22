import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  header: IStyle
  title: object
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    header: {
      display: 'flex',
      padding: theme.spacing.normal,
    },
    title: {
      display: 'flex',
      justifyContent: 'flex-start',
      color: theme.color.textOnPrimary,
      ...theme.font.headline4,
    },
  }
}

export default makeStyles
