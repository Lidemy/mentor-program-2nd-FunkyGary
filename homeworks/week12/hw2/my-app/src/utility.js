export default function calculateWinner(squares) {
    const lines = [];
    for (let i = 0; i < 225; i++) {
        // 往右
        if (i % 15 < 11) {
            lines.push([i, i + 1, i + 2, i + 3, i + 4])
        }
        // 往下
        if (Math.floor(i / 15) < 11) {
            lines.push([i, i + 15, i + 30, i + 45, i + 60])
        }
        // 往右下 
        if (i % 15 < 11 && (Math.floor(i / 15) < 11)) {
            lines.push([i, i + 16, i + 32, i + 48, i + 64])
        }
        // 往左下 
        if (i % 15 > 5 && (Math.floor(i / 15) < 11)) {
            lines.push([i, i + 14, i + 28, i + 42, i + 56])
        }
    }
    for (let i = 0; i < squares.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
            return squares[a];
        }
    }
    return null;
}