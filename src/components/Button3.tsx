import React, { type JSX } from 'react'

const Button3 = ({children} : React.PropsWithChildren) => {

   const handleClick: React.MouseEventHandler = (event) => {
      console.log(event.pageX);
   }

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button3