import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import Statebase from './components/Statebase'
import Welcome2 from './components/Welcome2'
import Api from './components/Api'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      {/*<Login/>*/}
     {/*<Signup />*/}
      <Navbar />
   



      <Routes>
       
        <Route path="/Sign" element={<Signup/> } />
        <Route path="/l" element={<Signup2 />} />
        <Route path="/State" element={<Statebase />} />
        <Route path="/w" element={<Welcome2 />} />
        <Route path="/a" element={<Api/>} />
      </Routes>
      
   
    </>

  )
}

export default App
