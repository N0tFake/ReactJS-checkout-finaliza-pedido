import { 
  Route, 
  Routes,
  Link, 
  BrowserRouter,
} from 'react-router-dom'
import { PaymentContent } from './components/tab/components/payment-contents'
import { ProductsContent } from './components/tab/components/products-contents'
import * as Styled from './styled-app'

function App() {
  return (
    <BrowserRouter>
      <Styled.ContainerMainStyle>
        <div className='center'>
          <Styled.ContainerButton>
            <Link to="/order">Order</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/confirmation">Confirmation</Link>
          </Styled.ContainerButton>
          <Routes>
              <Route path='/' element={<ProductsContent />} />
              <Route path='/order' element={<ProductsContent />} />
              <Route path='/payment' element={<PaymentContent />} />
          </Routes>
        </div>
      </Styled.ContainerMainStyle>
    </BrowserRouter> 
  )
}

export default App
