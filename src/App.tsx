import { useState } from 'react'
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React hey</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Button type="primary">Button</Button>
      <p className='bg-blue-500'>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </>
  )
}

export default App
