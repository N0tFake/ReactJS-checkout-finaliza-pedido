import { useReducer } from "react";
import { createContext } from "react";
import mock from "../mock"

const OrderContext = createContext();

const initialState = {
    products: null,
    discount: 0,
    endPrice: 0,
    status: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return {
                products: mock,
                endPrice: mock.reduce((sum, item) => sum + (item.price * item.quant), 0).toFixed(2),
                discount: 0,
                status: "Não Finalizado"
            }
        case "QUANT":
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
        case "DELETE":
            let products = state.products.map(item => {
                if(item.id === action.id){
                    item.quant = action.quant
                }else{
                    return item
                }
            })
            products = products.filter(item => item)
            const endPrice = products.reduce((sum, item) => sum + (item.price * item.quant), 0).toFixed(2)
            console.log("DELETE ", products, endPrice)
            return {
                ...state,
                products: products,
                endPrice: endPrice
            }
        case "DISCOUNT":
            const discount = ((state.endPrice * action.prct)/100).toFixed(2)
            const valueWithDiscount = (state.endPrice - discount).toFixed(2)
            return {
                ...state,
                discount: discount,
                endPrice: valueWithDiscount
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

