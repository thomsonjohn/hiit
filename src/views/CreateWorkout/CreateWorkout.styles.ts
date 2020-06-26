import { IStyle } from 'fela'

interface Style {
  content: IStyle
}

const makeStyles = (): Style => {
  return {
    content: {
      display: 'flex',
      flex: '1 1 auto',
    },
  }
}

export default makeStyles
