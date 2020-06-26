import { Theme } from '../../../../Theme'

interface Style {
  option: object
  optionLabel: object
}

interface StyleProps {
  theme: Theme
  option: { selected: boolean }
}

const makeStyles = ({ theme, option }: StyleProps): Style => {
  return {
    option: {
      alignItems: 'center',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      marginRight: theme.spacing.xlarge,
      opacity: option.selected ? '100%' : '50%',
      outline: 'none',
      position: 'relative',
      ':hover': {
        opacity: '100%',
      },
      transition: 'opacity ease-in 0.3s',
    },
    optionLabel: {
      ...theme.font.button,
      color: theme.color.textOnPrimary,
      display: 'flex',
      alignItems: 'center',
      margin: `${theme.spacing.normal} 0`,
      '> i': {
        position: 'absolute',
        right: '-8px',
        fontSize: '1rem',
        color: theme.color.secondary,
      },
    },
  }
}

export default makeStyles
