// import { useState } from 'react'
function Button({value,onSquareClick}){
  return (
    <>
   <button onClick={onSquareClick} className="text-black text-[30px] flex bg-none border p-5">
     {value}
   </button>
      </>
  )
}
export default Button;