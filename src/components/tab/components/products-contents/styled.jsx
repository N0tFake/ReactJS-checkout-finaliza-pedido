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

    &>img{
        border-radius: 10px;
        width: 5%;
        margin: 10px 0 10px 0;
    }

    &>div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 90%;
    }

`;