import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import OrderContext from "../../context/OrderContext";

// ! TERMINAR VALIDAÇOES NOW

const schema = yup.object({
    number: yup.string()
        .min(14, "Insira um número válido de 14 a 16 dígitos")
        .max(16, "MAX")
        .required()
        .typeError("Esse campo é obrigatorio carai"),
    expiry: yup.date().min(new Date()).required(),
    cvc: '',
    name: '',
})

export const PaymentContent = () => {
    const { dispatch, state} = useContext(OrderContext)
    const {register, handleSubmit, control, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => console.log(data)
    const [card, setCard] = useState({
        number: "",
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target 
        setCard((prev) => ({...prev, [name]: value}))
    }

    const handleInputFocus = (e) => {
        setCard((prev) => ({...prev, focus: e.target.name}))
    }

    return (
        <div id="PaymentForm">
            <Cards
                number={card.number}
                expiry={card.expiry}
                cvc={card.cvc}
                name={card.name}
                focused={card.focus}
            /> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("number")} 
                    name="number"
                    placeholder="number"
                    value={card.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <p>{errors.number?.message}</p>

                <input 
                    {...register("name")}
                    name="name"
                    placeholder="name"
                    value={card.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <p>{errors.name?.message}</p>

                <input 
                    {...register("expiry")} 
                    name="expiry"
                    placeholder="expiry"
                    value={card.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <p>{errors.expiry?.message}</p>

                <input 
                    {...register("cvc")}
                    name="cvc"
                    placeholder="cvc"
                    value={card.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <p>{errors.cvc?.message}</p>

                <input type="submit" />

        </form>
        </div>
    )
}