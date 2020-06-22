import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import List from '../../components/List'

interface Props {
  path: RouteComponentProps
}

const Moves: FC<Props> = () => {
  return (
    <div>
      <List />
    </div>
  )
}

export default Moves
