import * as Styled from './styled'
import { CardPrices } from '../card-prices'
import { useEffect, useContext } from 'react'
import OrderContext from '../../context/OrderContext'
import { Plus, Minus, Trash } from 'phosphor-react'


export const ProductsContent = () => {
    const {state, dispatch} = useContext(OrderContext)

    const handleIncrement = (id, quant)=>{
        dispatch({type: "QUANT", id: id, quant: quant+1})
    }

    const handleDecrement = (id, quant) => {
        if (quant-1 == 0){
            dispatch({type: "DELETE", id: id, quant: quant-1})
        }else{
            dispatch({type: "QUANT", id: id, quant: quant-1})  
        }
    }

    useEffect(() => {
        if (state.status == "") {
            dispatch({type: "INIT"})
        }
    }, [state])

    return (
        <Styled.ContentProducts>  
            <Styled.OrdersStyle>
                {state.products == null || state.products.length == 0 
                    ? 
                        <Styled.OrderEmptyStyle>
                            Empty
                        </Styled.OrderEmptyStyle>
                    :
                    state.products.map((product, i) => {
                    return (
                        <Styled.CardProduct key={i}>
                            <img src={product.img} alt={product.name}/>
                            <div className='content'>
                                <span>{product.name}</span>
                                <span>R$ {product.price}</span>
                                
                                <Styled.BtnIncrementDecrementStyle quant={product.quant}>
                                    <button className='icon icon-minus' onClick={() => handleDecrement(product.id, product.quant)}>
                                        {product.quant == 1 ? <Trash /> : <Minus />}
                                    </button>
                                    <span>{product.quant}</span>
                                    <button className='icon icon-add' onClick={() => handleIncrement(product.id, product.quant)}>
                                        <Plus />
                                    </button>
                                </Styled.BtnIncrementDecrementStyle>

                            </div>
                        </Styled.CardProduct>
                    )
                })}
            </Styled.OrdersStyle>
            
            <CardPrices />
        </Styled.ContentProducts>
    )
}