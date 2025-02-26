import React, { createContext, useState } from 'react'

export const GridContext = createContext()

export const GridProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false])

  const toggleCell = (index) => {
    setCells(prevCells => {
      const newCells = [...prevCells]
      newCells[index] = !newCells[index]
      return newCells
    })
  }

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      {children}
    </GridContext.Provider>
  )
}
