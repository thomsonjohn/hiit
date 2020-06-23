import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useFela } from 'react-fela'

import List from '../../components/List'
import { Theme } from '../../Theme'

import makeStyles from './Moves.styles'

interface Props {
  path: RouteComponentProps
}

const Moves: FC<Props> = () => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <div className={css(styles.content)}>
      <List />
    </div>
  )
}

export default Moves
