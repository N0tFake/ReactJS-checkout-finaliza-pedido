import styled from 'styled-components'

export const CardPricesStyle = styled('div')`
    background: #242424;
    width: 50%;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border-radius: 5px;

    margin-left: 10px;

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
        flex-direction: column;
        justify-content: space-around;

        width: 90%;
        height: 100px;

    }


    .inputCupom {
        display: flex;
        justify-content: space-between;
    }

    .inputCupom>input {
        border: none;
        width: 70%;
    }

    .container-cupom>div>button {
        padding: 0;
        padding-left: 20px;
        padding-right: 20px;

        background-color: #1a1a1a;
    }

    .container-cupom>div>button:hover {
        border-color: #FFBF00;
        color: #FFBF00
    }

    .resultCupom {
        height: 30px;
    }

    .cupomValid {
        background: #d4edda;
        color: #155724;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
    }

    .cupomInvalid {
        background: #f8d7da;
        color: #721c24;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
    }

`