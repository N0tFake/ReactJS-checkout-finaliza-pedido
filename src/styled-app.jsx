import styled from "styled-components"

export const ContainerButton = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

    a {
        text-align: center;
        border-radius: 0;
        border: 1px solid #2b2b2b;
        display: block;
        width: 100%;
        color: white;
    }
    
    .current {
        color: yellow;
    }

    a:hover {
        border-color: yellow;
    }

`

export const ContainerMainStyle = styled('div')`
    width: 100vw;
    display: flex;
    justify-content: center;
    .center {
        width: 95%;
    }
`