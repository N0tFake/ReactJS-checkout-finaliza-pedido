import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import CardPaymentContext from '../../context/CardPaymentContext';
import { Btn } from '../btn';
import * as Styled from './styled';

// ! TERMINAR VALIDAÇOES NOW
const schema = yup.object({
    number: yup.string()
        .required("Campo obrigatorio")
        .min(14, "Insira um número válido de 14 a 16 dígitos")
        .max(16, "MAX")
        .typeError("Esse campo é obrigatorio carai"),
    
    name: yup.string().required("Nome completo é obrigatório"),

    expiry: yup.string()
        .required("Campo obrigatorio")
        .matches(/^\d{2}\/\d{4}$/, 'Insira uma data válida')
        .test('validade-data', 'Insira uma data válida', (value) => {
            if (!value) return true;

            const [month, year] = value.split('/');
            const currentDate = new Date();
            const inputDate = new Date(Number(year), Number(month)-1);

            console.log(inputDate);
            return inputDate >= currentDate;
        }),

    cvc: yup.number()
        .transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value)
        .required()
        .positive("Numero deve ser positivo")
        .min(3, "Mínimo de 3 caracteres"),

    cpf: yup.string().required('Campo obrigatorio')

})

export const PaymentContent = () => {
    const { dispatch, state} = useContext(CardPaymentContext)
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()
    
    const onSubmit = (data) => {
        console.log('Antes', state)
        const cardData = {
            type: 'CREATE', 
            number: data.number,
            name: data.name,
            expiry: data.expiry,
            cvc: data.cvc,
            cpf: data.cpf,
        }
        dispatch(cardData)

        navigate('/confirmation')
    }
    
    const [card, setCard] = useState({
        number: "",
        expiry: '',
        cvc: '',
        name: '',
        cpf: '',
        focus: '',
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setCard((prev) => ({...prev, [name]: value}))
    }

    const handleInputFocus = (e) => {
        setCard((prev) => ({...prev, focus: e.target.name}))
    }

    return <>
        <Styled.title>
            Add method payment
        </Styled.title>
        <Styled.paymentCard>
            <div>
                <Styled.formStyle onSubmit={handleSubmit(onSubmit)}>
                    <Styled.inputStyle
                        {...register("number")} 
                        error={!!errors.number}
                        helperText={errors.number ? errors.number?.message : ' ' }
                        name="number"
                        label="Number"
                        value={card.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />

                    <Styled.inputStyle
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name ? errors.name?.message : ' '}
                        name="name"
                        label="Name"
                        value={card.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />

                    <div className='expiryAndCVC'>
                        <InputMask 
                            mask="99/9999" 
                            {...register("expiry")} 
                            value={card.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        >
                            {() => <Styled.inputStyle 
                                label="Expiry" 
                                name="expiry" 
                                error={!!errors.expiry} 
                                helperText={errors.expiry ? errors.expiry?.message : ' '} 
                            />}
                        </InputMask>
                        
                        <Styled.inputStyle
                            error={!!errors.cvc}
                            helperText={errors.cvc ? errors.cvc?.message : ' '} 
                            {...register("cvc")}
                            name="cvc"
                            label="CVC"
                            value={card.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>

                    <InputMask 
                        {...register("cpf")}
                        value={card.cpf}
                        mask={'999.999.999-99'}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    >
                        {() => <Styled.inputStyle 
                            error={!!errors.cpf}
                            helperText={errors.cpf ? errors.cpf?.message : ' '}
                            label="CPF" 
                            name="cpf"
                        />}
                    </InputMask>

                    <div className="btn" >
                        <Btn type="submit" onClick={() => {}} children={"Confirm"} />
                    </div>

                </Styled.formStyle>
            </div>
            
            <div className='card'>
                <Cards
                    number={card.number}
                    expiry={card.expiry}
                    cvc={card.cvc}
                    name={card.name}
                    focused={card.focus}
                /> 
            </div>
        </Styled.paymentCard>
    </>
}