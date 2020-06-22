import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  muscleGroup: object
}

interface StyleProps {
  theme: Theme
  primary: string[]
  secondary: string[]
}

const getPosition = (muscle: string): {} => {
  switch (muscle) {
    case 'chest':
      return {
        left: '-88px',
        top: '-18px',
      }
    case 'core':
      return {
        left: '-88px',
        top: '-28px',
      }
    case 'shoulders':
      return {
        left: '-88px',
        top: '-18px',
      }
    case 'biceps':
      return {
        left: '-88px',
        top: '-28px',
      }
    case 'quads':
      return {
        left: '-88px',
        top: '-108px',
      }
    case 'abductor':
      return {
        left: '-88px',
        top: '-88px',
      }
    case 'hams':
      return {
        left: '-217px',
        top: '-108px',
      }
    case 'calves':
      return {
        left: '-217px',
        top: '-138px',
      }
    case 'upperBack':
      return {
        left: '-217px',
        top: '-18px',
      }
    case 'back':
      return {
        left: '-217px',
        top: '-28px',
      }
    case 'triceps':
      return {
        left: '-217px',
        top: '-28px',
      }
    case 'glutes':
      return {
        left: '-217px',
        top: '-68px',
      }
    case 'obliques':
      return {
        left: '-88px',
        top: '-38px',
      }
    case 'forearms':
      return {
        left: '-58px',
        top: '-58px',
      }
    case 'traps':
      return {
        left: '-88px',
        top: '-18px',
      }
    default:
      return {}
  }
}

const makeStyles = ({ theme, primary, secondary }: StyleProps): Style => {
  return {
    muscleGroup: {
      border: '1px solid #b9b9b9',
      overflow: 'hidden',
      borderRadius: '50%',
      height: '70px',
      width: '70px',

      '> svg': {
        position: 'relative',
        width: '375px',
        height: '228px',
        ...getPosition(primary[0]),
      },
    },
  }
}

export default makeStyles
