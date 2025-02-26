import React, { useContext } from "react";
import { GridContext } from "./GridContext";

const Cell = ({index}) => {
    const { cells, toggleCell } = useContext(GridContext)
    const isOn = cells[index]

    const cellStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
        cursor: 'pointer'
    }

    return <div style={cellStyle} onClick={() => toggleCell(index)} />
}

export default Cell