import styled from 'styled-components'

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

`