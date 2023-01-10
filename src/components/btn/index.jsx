import * as Styled from './styled'

export const Btn = ({children, onClick, disabled}) => {
    return (
        <Styled.BtnStyle onClick={onClick} disabled={disabled}>
            {children}
        </Styled.BtnStyle>
    )
}