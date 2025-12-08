import { useState } from 'react'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact></Contact>
      <Contact></Contact>
      <Contact></Contact>
      <Contact></Contact>
    </>
  )
}

export default App
