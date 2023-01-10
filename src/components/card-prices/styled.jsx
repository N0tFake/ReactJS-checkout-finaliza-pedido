import styled from 'styled-components'

export const CardPricesStyle = styled('div')`
    background: #242424;
    width: 100%;
    height: 25vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border-radius: 5px;

    &>div{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &:disabled {
        background: red;
    }

`