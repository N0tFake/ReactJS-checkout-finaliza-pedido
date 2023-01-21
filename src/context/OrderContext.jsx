import { useReducer } from "react";
import { createContext } from "react";
import mock from "../mock"

const OrderContext = createContext();

const initialState = {
    products: null,
    endPrice: 0,
    status: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return {
                products: mock,
                endPrice: mock.reduce((sum, item) => sum + (item.price * item.quant), 0).toFixed(2),
                status: "Não Finalizado"
            }
        case "ADD":
            return {
                ...state,
                products: state.products.map(item => {
                    if(item.id === action.id){
                        item.quant = action.quant
                    }
                    return item
                }),
                endPrice: state.products.reduce((sum, item) => sum + (item.price * item.quant), 0).toFixed(2)
            }
        default:
            return state
    } 
}

export const OrderProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <OrderContext.Provider value={{state, dispatch}}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;

