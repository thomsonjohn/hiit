import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  list: IStyle
  group: IStyle
  item: object
  label: object
  groupItems: IStyle
  line: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    list: {
      display: 'flex',
      flexDirection: 'column',
    },
    group: {
      display: 'flex',
      flexDirection: 'row',
    },
    item: {
      padding: theme.spacing.smallish,
      ...theme.font.body1,
    },
    label: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: theme.color.secondary,
      padding: `${theme.spacing.smallish} ${theme.spacing.smallish} ${theme.spacing.smallish} 0`,
      width: '20px',
      ...theme.font.button,
    },
    groupItems: {
      display: 'flex',
      flexDirection: 'column',
    },
    line: {
      border: `1px solid ${theme.color.secondary}`,
      flex: `1 1 auto`,
      marginTop: theme.spacing.normal,
      width: 0,
    },
  }
}

export default makeStyles
