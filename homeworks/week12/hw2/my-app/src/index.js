import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import calculateWinner from './utility';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(225).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? '●' : '○';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            return ( 
                <li key = { move } >
                <a 
                    href = "#"
                    onClick = { () => this.jumpTo(move) } > { desc } 
                </a> 
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? '●' : '○');
        }
        return ( 
            <div className = "game">
                <div className = "game-board">
                <Board 
                    squares = { current.squares }
                    onClick = { (i) => this.handleClick(i) }
                /> 
                </div > 
                <div className = "game-info" >
                    <div>{ status }</div> 
                    <ol>{ moves }</ol> 
                </div >
            </div>
        );
    }
}

// ========================================

ReactDOM.render( <Game/> ,
    document.getElementById('root')
);