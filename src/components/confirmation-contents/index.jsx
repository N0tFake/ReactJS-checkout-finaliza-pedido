import { useContext } from "react"
import CardPaymentContext from "../../context/CardPaymentContext"
import OrderContext from "../../context/OrderContext"
import * as Styled from './styled'

export const ConfirmationContent = () => {
  const {dispatch: dispatchPayment, state: statePayment} = useContext(CardPaymentContext)
  const {dispatch: dispatchOrder, state: stateOrder} = useContext(OrderContext)
  
  return (
    <Styled.ConfirmationContentStyle>
      <span>name: {statePayment.name}</span>
      <span>cpf: {statePayment.cpf}</span>
      <span>number: {statePayment.number}</span>
      <span>expiry: {statePayment.expiry}</span>
      <span>cvc: {statePayment.cvc}</span>

      <span>endPrice: {stateOrder.endPrice}</span>
    </Styled.ConfirmationContentStyle>
  )
}