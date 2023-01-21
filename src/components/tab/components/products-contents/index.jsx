import mock from '../../../../mock'
import * as Styled from './styled'
import { BtnIncrementDecrement } from '../../../btn-increment-decrement'
import { CardPrices } from '../../../card-prices'
import { useContext } from 'react'
import OrderContext from '../../../../context/OrderContext'
import { useEffect } from 'react'

export const ProductsContent = () => {
    const {state, dispatch} = useContext(OrderContext)

    useEffect(() => {
        dispatch({type: "INIT"})
    }, [])

    return (
        <>  
            {state.products == null ? 
                    <h1>Loading...</h1> : 
                state.products.map((product, i) => {
                return (
                    <Styled.CardProduct key={i}>
                        <img src={product.img} alt={product.name}/>
                        <div className='content'>
                            <span>{product.name}</span>
                            <span>R$ {product.price}</span>
                            <span>R$ {product.quant}</span>
                            <BtnIncrementDecrement product={product}/>
                        </div>
                    </Styled.CardProduct>
                )
            })}
            
            <CardPrices />
        </>
    )
}