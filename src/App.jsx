import React, { use } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  //we are restircting the navbar not to display on the page when the route - owner
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
    </div>
  )
}

export default App