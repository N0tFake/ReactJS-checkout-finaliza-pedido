import styled from 'styled-components'

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

`;