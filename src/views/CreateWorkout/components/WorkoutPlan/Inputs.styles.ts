import { IStyle } from 'fela'

import { Theme } from '../../../../Theme'

interface Style {
  input: object
  inputWrapper: object
  wrapper: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    input: {
      display: 'flex',
      alignItems: 'center',
      '> input': {
        backgroundColor: 'transparent',
        border: 'none',
        color: theme.color.textOnPrimary,
        cursor: 'pointer',
        margin: `${theme.spacing.normal} 0`,
        outline: 'none',
        textAlign: 'center',
        width: '180px',
        ...theme.font.headline3,
      },
      '> i': {
        color: theme.color.secondary,
      },
    },
    inputWrapper: {
      border: `3px solid ${theme.color.primaryLight}`,
      borderRadius: theme.spacing.xsmall,
      cursor: 'pointer',
      color: theme.color.primary,
      padding: theme.spacing.small,
      width: '208px',
      '> label': {
        color: theme.color.textOnPrimary,
        ...theme.font.button,
      },
      ':hover': {
        '> label': {
          color: theme.color.secondary,
        },
      },
      ':focus-within': {
        border: `3px solid ${theme.color.secondary}`,
      },
      transition: 'all ease-in 0.3s',
    },
    wrapper: {
      display: 'grid',
      margin: theme.spacing.normal,
      gridTemplateColumns: '1fr 1fr',
      columnGap: theme.spacing.small,
      rowGap: theme.spacing.small,
    },
  }
}

export default makeStyles
