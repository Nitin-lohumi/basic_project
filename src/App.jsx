import { useState } from 'react';
import './App.css'
import Button from './component/Button'
function App(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const[status,setStatus]=useState('play')
  function handleClick(i){
    if (squares[i]||Calculate(squares)) {
      return;
    }
    const nextSquare =  squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);

    let winner = Calculate(squares);
    console.log(winner);
    if (winner) {
      setStatus("Winner: " + winner);
    }
    else{
      setStatus( "Next player: " + (xIsNext? "O" : "X"));
    }
  }
  function Calculate(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return squares[a];
      }
  return null;
}
  }
   return (
    <>
     <div className="status">{status}</div>
     <br /> 
    <div className='border-black rounded text-black flex gap-10 w-[40%] m-auto'>

     <div >
      <Button  value={squares[0]}  onSquareClick={() => handleClick(0)}/>
      <Button value={squares[1]}  onSquareClick={() => handleClick(1)}/>
      <Button value={squares[2]} onSquareClick={() => handleClick(2)}/>
     </div>
     <div>   
     <Button  value={squares[3]} onSquareClick={() => handleClick(3)}/>   
     <Button  value={squares[4]} onSquareClick={() => handleClick(4)}/>   
     <Button value={squares[5]}  onSquareClick={() => handleClick(5)}/>
     </div>
     <div>
     <Button value={squares[6]} onSquareClick={() => handleClick(6)}/>  
     <Button value={squares[7]} onSquareClick={() => handleClick(7)}/> 
     <Button value={squares[8]} onSquareClick={() => handleClick(8)}/>
     </div>
     </div>
    </>
  )
}

export default App
