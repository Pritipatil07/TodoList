import React, { useState } from 'react'
import Image from './components/Image'
import TodoItems from './components/TodoItems'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {

  return (
    <div >
      <div className="columns-1 sm:columns-2">
        <Image />
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default App
