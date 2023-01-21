import styled from 'styled-components'

export const BtnStyle = styled('button')`
    background-color: #FFBF00;
    width: 80%;
    color: #242424;
    /* border-color: #FFBF00; */
    font-weight: bold;
    border: None;

    &:hover {
        background-color: #d6a205;
    }

    &:disabled {
        background-color: #1a1a1a;
        color: gray;
    }

`