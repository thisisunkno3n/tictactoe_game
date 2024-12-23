
import React from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

export const TicTacToe = () => {
  return (
    <div className = 'container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1> 
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>
    <button className="reset">Reset</button>

    </div>
  )
}
