import { Theme } from '../../Theme'

interface Style {
  button: object
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    button: {
      background: theme.color.secondary,
      color: theme.color.textOnSecondary,
      width: '300px',
      padding: theme.spacing.normal,
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      marginTop: theme.spacing.normal,
      outline: 'none',
      ...theme.font.button,
      ':hover': {
        background: theme.color.secondaryLight,
      },
      transition: 'background ease-in 0.2s',
    },
  }
}

export default makeStyles
