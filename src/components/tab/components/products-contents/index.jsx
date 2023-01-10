import mock from '../../../../mock'
import * as Styled from './styled'
import { BtnIncrementDecrement } from '../../../btn-increment-decrement'
import { CardPrices } from '../../../card-prices'
import { useContext } from 'react'
import OrderContext from '../../../../context/OrderContext'

export const ProductsContent = () => {
    const orderContext = useContext(OrderContext)

    console.log(orderContext)

    return (
        <> 
            {mock.map((product,i) =>{
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