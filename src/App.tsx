import React from 'react'
import { Router } from '@reach/router'
import { useFela } from 'react-fela'

import Header from './components/Header'
import Landing from './views/Landing'
import Moves from './views/Moves'
import { Theme } from './Theme'

import { GlobalProvider } from './context/GlobalState'
import makeStyles from './App.styles'

const App = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <GlobalProvider>
      <div className={css(styles.app)}>
        <Header />
        <Router>
          <Landing path="/" />
          <Moves path="moves" />
        </Router>
      </div>
    </GlobalProvider>
  )
}

export default App
