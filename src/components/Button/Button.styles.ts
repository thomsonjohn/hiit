import { Theme } from '../../Theme'

interface Style {
  button: object
}

interface StyleProps {
  theme: Theme
  disabled?: boolean
}

const makeStyles = ({ theme, disabled }: StyleProps): Style => {
  return {
    button: {
      background: disabled ? theme.color.surfaceDark : theme.color.secondary,
      border: 'none',
      borderRadius: '25px',
      color: theme.color.textOnSecondary,
      cursor: disabled ? 'normal' : 'pointer',
      marginTop: theme.spacing.normal,
      outline: 'none',
      padding: theme.spacing.normal,
      textAlign: 'center',
      textDecoration: 'none',
      width: '300px',
      ...theme.font.button,
      ':hover': {
        background: !disabled ? theme.color.secondaryLight : null,
      },
      transition: 'background ease-in 0.2s',
    },
  }
}

export default makeStyles
