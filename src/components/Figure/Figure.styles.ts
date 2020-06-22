import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  primary: IStyle
  secondary: IStyle
  mute: IStyle
}

interface StyleProps {
  theme: Theme
  primary: string[]
  secondary: string[]
}

const makeStyles = ({ theme, primary, secondary }: StyleProps): Style => {
  return {
    primary: {
      fill: theme.color.secondary,
    },
    secondary: {
      fill: theme.color.secondaryLight,
    },
    mute: {
      fill: '#b9b9b9',
    },
  }
}

export default makeStyles
