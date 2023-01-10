import { Btn } from '../btn'
import * as Styled from './styled'

export const CardPrices = () => {
    return (
        <Styled.CardPricesStyle>
            <div>
                <span>Preço: </span>
                <span>Desconto: </span>
                <span>Total: </span>
            </div>
            <Btn onClick={()=>console.log('dsasd')} disabled={true}>confirmar</Btn>
        </Styled.CardPricesStyle>
    )
}