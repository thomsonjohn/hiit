import React from 'react'
import { Router } from '@reach/router'
import { useFela } from 'react-fela'

import CreateWorkout from './views/CreateWorkout'
import Header from './components/Header'
import Landing from './views/Landing'
import Moves from './views/Moves'
import { Theme } from './Theme'

import makeStyles from './App.styles'
import { GlobalProvider } from './context/GlobalState'

const App = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <GlobalProvider>
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.main)}>
          <Router>
            <Landing path="/" />
            <Moves path="moves" />
            <CreateWorkout path="create" />
          </Router>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
