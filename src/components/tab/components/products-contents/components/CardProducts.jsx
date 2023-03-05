import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import * as Styled from './CardProducsStyled'
import { BtnIncrementDecrement } from '../../../../btn-increment-decrement'


export const CardProducts = () => {
    const {state} = useContext(OrderContext)

    return (
        <div>
                {state.products == null ? 
                        <h1>Loading...</h1> : 
                    state.products.map((product, i) => {
                    return (
                        <Styled.CardProduct key={i}>
                            <img src={product.img} alt={product.name}/>
                            <div className='content'>
                                <span>{product.name}</span>
                                <span>R$ {product.price}</span>
                                
                                <BtnIncrementDecrement product={product}/>
                            </div>
                        </Styled.CardProduct>
                    )
                })}
            </div>
    )
}