import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom'
import { ConfirmationContent } from './components/confirmation-contents'
import { PaymentContent } from './components/payment-contents'
import { ProductsContent } from './components/products-contents'
import { CardPaymentProvider } from './context/CardPaymentContext'
import * as Styled from './styled-app'

function App() {
  return (
    <CardPaymentProvider>
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
                <Route path='/confirmation' element={<ConfirmationContent />} />
            </Routes>
          </div>
        </Styled.ContainerMainStyle>
      </BrowserRouter> 
    </CardPaymentProvider>
  )
}

export default App
