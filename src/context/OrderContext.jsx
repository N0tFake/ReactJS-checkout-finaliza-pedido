import { createContext } from "react";

const OrderContext = createContext({});

export const OrderProvider = ({children}) => {
    return (
        <OrderContext.Provider value={{teste: true}}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;

