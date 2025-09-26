import React from 'react'

type ButtonProps = {
   incrementar: React.Dispatch<React.SetStateAction<number>>
}

const Button4 = ({incrementar}: ButtonProps) => {
  return (
    <button onClick={() => incrementar((n) => n + 1)}>Incrementar 4</button>
  )
}

export default Button4