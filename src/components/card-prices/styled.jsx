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

    .container-cupom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-cupom>input {
        margin-left: 1em;
        margin-right: 1em;
    }

    .container-cupom>button {

        padding: 0;
        padding-left: 20px;
        padding-right: 20px;

        border-color: #FFBF00;
        background-color: #1a1a1a;
        color: #FFBF00;
    }

    .container-cupom>button:hover {
        background-color: #FFBF00;
        color: white
    }

`