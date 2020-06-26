import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useFela } from 'react-fela'

import Button from '../../components/Button'
import { Theme } from '../../Theme'

import makeStyles from './Landing.styles'

interface Props {
  path: RouteComponentProps
}

const Landing: FC<Props> = () => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })
  return (
    <div className={css(styles.content)}>
      <h1 className={css(styles.text)}>
        Start your next <span>HIIT</span> workout<span>.</span>
      </h1>
      <Button path="create" text="Let's go" />
    </div>
  )
}

export default Landing
