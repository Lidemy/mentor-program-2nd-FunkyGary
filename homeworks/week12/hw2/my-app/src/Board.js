import React, { Component } from 'react';
import './App.css';
import calculateWinner from './utility';

function Square(props) {
  return ( 
    < button 
      className = 'square'
      onClick = { props.onClick } > 
      { props.value } 
    </button>
  )
}


class Board extends React.Component {

  renderSquare(i) {
      return ( 
        <Square 
          value = { this.props.squares[i] }
          onClick = { () => this.props.onClick(i) }
        />
      );
  }

  render() {
      const winner = calculateWinner(this.props.squares);
      let status;
      if (winner) {
          status = 'Winner:' + winner;
      } else {
          status = 'Next player: ' + (this.props.xIsNext ? '●' : '○');
      }
      return ( 
        < div >
          { this.props.squares.map( (i, index) => this.renderSquare(index) )}
        </div>
      );
  }
}

export default Board;