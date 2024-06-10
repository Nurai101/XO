const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameActive = true;
let board = Array(9).fill('');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkWin = () => {  
    return winningConditions.some(condition => { 
      const [a, b, c] = condition; 
      return board[a] && board[a] === board[b] && board[a] === board[c]; 
    });
  };

  const handleCellClick = (cellIndex) => {
    if (board[cellIndex] !== '' || !gameActive) return;
    board[cellIndex] = currentPlayer; 
    document.getElementById(cell-${cellIndex}).textContent = currentPlayer;
    if (checkWin()) {
        statusText.textContent = "Игрок ${currentPlayer} победил!";
        gameActive = false; 
      } 
      else if (!board.includes('')) {
        statusText.textContent = 'Ничья!';
        gameActive = false;
      } 
      else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  
      }
    }
    const resetGame = () => {

        currentPlayer = 'X';
        gameActive = true;
        board = Array(9).fill(''); 
        cells.forEach(cell => cell.textContent = '');
        statusText.textContent = '';
      };

      cells.forEach((cell, index) => cell.addEventListener('click', () => handleCellClick(index)));