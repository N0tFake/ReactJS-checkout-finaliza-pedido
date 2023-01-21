import { useContext, useRef, useState } from 'react'
import OrderContext from '../../context/OrderContext'
import { Btn } from '../btn'
import * as Styled from './styled'

export const CardPrices = () => {

    const {state} = useContext(OrderContext)

    const [statusCupom, setStatusCupom] = useState('')
    const inputRef = useRef()

    const handleCupom = () => {
        if(inputRef.current.value.length < 3 || inputRef.current.value == '' || inputRef.current.value == null){
            setStatusCupom("Cupom Invalido")
        }else{
            setStatusCupom("Cupom Aplicado")
        }    
    }

    const endPrice = state.endPrice
    const discount = -0.00
    const total = endPrice - discount 

    return (
        <Styled.CardPricesStyle>
            <div>
                <div className="container-cupom">
                    <span>Código promocional: </span>
                    <input ref={inputRef} type="text" placeholder="Insira o código" />
                    <button onClick={handleCupom}>Aplicar</button>

                    <div>
                        {statusCupom}               
                    </div>

                </div>
                <span>Preço: R$ {endPrice}</span>
                <span>Desconto: R$ {discount}</span>
                <span>Total: {total}</span>
            </div>
            <Btn onClick={()=>console.log('dsasd')} disabled={state.products == null}>confirmar</Btn>
        </Styled.CardPricesStyle>
    )
}