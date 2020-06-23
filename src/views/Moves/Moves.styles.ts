import { IStyle } from 'fela'

import { Theme, theme } from '../../Theme'

interface Style {
  content: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    content: {
      padding: theme.spacing.xlarge,
    },
  }
}

export default makeStyles
