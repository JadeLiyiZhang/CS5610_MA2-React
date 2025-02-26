import React, { useContext } from 'react'
import { GridContext } from './GridContext'
import Cell from './Cell'

const Grid = () => {
  const { cells } = useContext(GridContext)
  const countOn = cells.filter(cell => cell).length

  const containerStyle = {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 100px)',
    gridTemplateRows: 'repeat(2, 100px)',
  }

  return (
    <div style={containerStyle}>
      <h2>Count: {countOn}</h2>
      <div style={gridStyle}>
        {cells.map((cell, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Grid
