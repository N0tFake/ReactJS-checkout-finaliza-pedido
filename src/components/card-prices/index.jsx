import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderContext from '../../context/OrderContext'
import { Btn } from '../btn'
import * as Styled from './styled'

export const CardPrices = () => {

    const {state, dispatch} = useContext(OrderContext)

    const [statusCupom, setStatusCupom] = useState({
        valid: false,
        status: ''
    })
    const inputRef = useRef()

    const navigate = useNavigate()

    const handleCupom = () => {
        if(inputRef.current.value.length < 3 || inputRef.current.value == '' || inputRef.current.value == null){
            setStatusCupom({
                valid: false,
                status: "Cupom Invalido"
            })
        }else{
            const discount = 99
            const status = `Cupom Aplicado: ${discount}% de desconto!` 
            setStatusCupom({
                valid: true,
                status: status
            })
            dispatch({type: "DISCOUNT", prct: discount})
        }    
    }

    const endPrice = state.endPrice
    const discount = state.discount.toString()
    const total = endPrice 

    return (
        <Styled.CardPricesStyle>
            <div>
                <div className="container-cupom">
                    <span>Código promocional: </span>
                    <div className='inputCupom'>
                        <input ref={inputRef} type="text" placeholder="Insira o código" />
                        <button onClick={handleCupom}>Aplicar</button>
                    </div>
                    <div className='resultCupom'>
                        { statusCupom.valid 
                        ?
                            <span className='cupomValid'>
                                {statusCupom.status}
                            </span>
                        :
                            statusCupom.status != ''
                            ?
                                <span className='cupomInvalid'>
                                    {statusCupom.status}
                                </span>    
                            :null
                            
                        }
                    </div>

                </div>
                <span>Preço: R$ {endPrice}</span>
                <span>Desconto: R$ {discount}</span>
                <span>Total: {total}</span>
            </div>
            <Btn onClick={()=>navigate('/payment')} disabled={state.products == null}>confirmar</Btn>
        </Styled.CardPricesStyle>
    )
}