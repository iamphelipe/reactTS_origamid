import React from 'react'
import { UiContext, useUi } from './UiContext'

const Header = () => {
   const {dark, setDark} = useUi()
   
  return (
      <button onClick={() => setDark((b) => !b)}>Mode</button>
  )
}

export default Header