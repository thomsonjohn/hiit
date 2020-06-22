import React from 'react'
import './App.css'

import Header from './components/Header'
import Figure from './components/Figure'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Figure primary={['chest']} secondary={['triceps', 'shoulders']} />
      </div>
    </div>
  )
}

export default App
