import styled from 'styled-components'

export const ContentProducts = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const OrdersStyle = styled('div')`
    width: 100%;
`

export const CardProduct = styled('div')`
    display: flex;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: #242424;  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 10px;

    &>img{
        border-radius: 10px;
        width: 13%;
        margin-right: 20px;
    }

    &>div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 90%;
    }

`

export const OrderEmptyStyle = styled('div')`
    padding: 150px 0;
    text-align: center;
    color: #242424;
    font-weight: bold;
    font-size: 4rem;
`

export const BtnIncrementDecrementStyle = styled('div')`
    width: 90px;
    height: 30px;
    border: 1px solid #1a1a1a;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;

    &>span {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        background-color: transparent;
        padding: 5px;
    }

    .icon:hover {
        background: #1a1a1a;
        border-color: #FFBF00;
    }

    .icon-add {
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        border-left: 1px solid #1a1a1a;
    }

    .icon-minus {
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-right: 1px solid #1a1a1a;
    }

    .icon-minus:hover {
        border-color: ${props => props.quant == 1 ? '#ff4444' : '#FFBF00'};
        color: ${props => props.quant == 1 ? '#ff4444' : 'white'};
    }

`

export const InfosCard = styled('div')`
    background-color: red;
    display: flex;
    flex-direction: column;
`