import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBox from './components/LoginBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginBox></LoginBox>
    </>
  )
}

export default App
