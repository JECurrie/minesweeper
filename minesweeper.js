// Run node minesweeper.js to run this code.
const board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];

const printBoard = board => {
  // Log 'Current Board: '
  // Log the first element of the board variable
  console.log('Current board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

console.log(printBoard(board));
board[0][1] = '1';
board[2][2] = 'B';
console.log(printBoard(board));
