import React from 'react'
import { UiContextProvider } from './UiContext'
import Header from './Header'
import Content from './Content'

const App3 = () => {
  return (
   <UiContextProvider>
      <Header/>
      <Content/>
   </UiContextProvider>
  )
}

export default App3