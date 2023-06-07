import { TextField } from '@mui/material';
import InputMask from "react-input-mask";
import styled from 'styled-components';

export const title = styled('h2')`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const paymentCard = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center
  }

  > *:first-child {
    margin-right: 50px;
  }

`

export const formStyle = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .expiryAndCVC> *:first-child {
    margin-right: 10px;
  }

  .btn {
    display: flex;
    justify-content: center;
  }

`

export const inputStyle = styled(TextField)`

  & label {
    color: #797979;
  }
  
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    color: white;
    background-color: #242424;
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
    
`;

export const MaskedInputStyled = styled(InputMask)`

`;