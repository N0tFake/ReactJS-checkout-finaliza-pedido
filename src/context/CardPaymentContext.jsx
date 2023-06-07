import { createContext, useReducer } from "react";

const CardPaymentContext = createContext();

const initialState = {
  number: "",
  name: "",
  expiry: "",
  cvc: "",
  cpf: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        number: action.number,
        name: action.name,
        expiry: action.expiry,
        cvc: action.cvc,
        cpf: action.cpf
      }
    default:
      return state
  }
}

export const CardPaymentProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardPaymentContext.Provider value={{state, dispatch}}>
      {children}
    </CardPaymentContext.Provider>
  )
}

export default CardPaymentContext;