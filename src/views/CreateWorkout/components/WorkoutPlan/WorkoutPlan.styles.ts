import { IStyle } from 'fela'

import { Theme } from '../../../../Theme'

interface Style {
  card: IStyle
  duration: object
  heading: object
  muscleGroup: object
  wrapper: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    card: {
      alignItems: 'center',
      color: theme.color.textOnPrimary,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '500px',
    },
    duration: {
      alignSelf: 'center',
      margin: 0,
      paddingBottom: theme.spacing.small,
      textAlign: 'center',
      width: '300px',
      ...theme.font.button,
    },
    heading: {
      alignSelf: 'center',
      borderBottom: `2px solid ${theme.color.secondary}`,
      margin: 0,
      paddingBottom: theme.spacing.small,
      textAlign: 'center',
      width: '150px',
      ...theme.font.button,
    },
    muscleGroup: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: theme.spacing.normal,
      '> div': {
        margin: theme.spacing.normal,
      },
    },
    wrapper: {
      background: theme.color.primary,
      padding: theme.spacing.xlarge,
      width: '50vw',
    },
  }
}

export default makeStyles
