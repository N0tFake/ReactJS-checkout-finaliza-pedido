import styled from "styled-components"

export const Container = styled('div')`
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
`

export const ContainerButton = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerContent = styled('div')`
    padding: 20px;
    background-color: #1a1a1a;
`

export const Button = styled.button`
    width: 100%;
    border-radius: 0;
    border-bottom: 1px solid #2b2b2b;
    &:disabled{
        color: yellow;
        border: 1px solid yellow;
    }
`