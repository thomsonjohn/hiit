import { IStyle } from 'fela'

import { Theme } from './Theme'

interface Style {
  app: object
  main: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    app: {
      color: theme.color.textOnPrimary,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      '> div': {
        display: 'flex',
        flex: '1 1 auto',
      },
    },
    main: {
      overflow: 'scroll',
    },
  }
}

export default makeStyles
