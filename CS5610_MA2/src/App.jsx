import React from 'react'
import { GridProvider } from './GridContext'
import Grid from './Grid'

const App = () => {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  )
}

export default App
