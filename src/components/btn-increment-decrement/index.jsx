import { Plus, Minus } from 'phosphor-react'
import { useState } from 'react'
import * as Styled from './styled'

export const BtnIncrementDecrement = ({product}) => {

    const [quant, setQuant] = useState(1)
    const [disabled, setDisabled] = useState(true)

    const handleIncrement = ()=>{
        setQuant(quant + 1)
        product['quant'] = quant
        if(disabled) {
            setDisabled(false)
        }
    }

    const handleDecrement = () => {
        if(quant == 0) {
            setDisabled(true)
        }else{
            setQuant(quant - 1)
        }
        
    }

    return (
        <Styled.BtnIncrementDecrementStyle>
            <button className='icon icon-minus' onClick={handleDecrement} disabled={disabled}>
                <Minus />
            </button>
            <span>{quant}</span>
            <button className='icon icon-add' onClick={handleIncrement}>
                <Plus />
            </button>
        </Styled.BtnIncrementDecrementStyle>
    )
}