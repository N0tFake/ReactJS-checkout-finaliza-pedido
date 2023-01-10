import { useState } from 'react'
import './App.css'
import { Tab } from './components/tab'
import OrderContext, { OrderProvider } from './context/OrderContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <OrderProvider>
        <Tab></Tab>
      </OrderProvider>
    </div>
  )
}

export default App
