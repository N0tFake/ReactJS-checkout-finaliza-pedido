import { useState, useContext } from "react"
import OrderContext from "../../context/OrderContext"
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css'
import { useForm } from "react-hook-form"
import * as yup from "yup"

// ! TERMINAR VALIDAÇOES NOW

const schema = yup.object({
    number: yup.number().positive().min(16).max(18).required(),
    expiry: '',
    cvc: '',
    name: '',
})

export const PaymentContent = () => {
    const { dispatch, state} = useContext(OrderContext)
    const {register, handleSubmit} = useForm()
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

                <input 
                    {...register("name")}
                    name="name"
                    placeholder="name"
                    value={card.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                <input 
                    {...register("expiry")} 
                    name="expiry"
                    placeholder="expiry"
                    value={card.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                <input 
                    {...register("cvc")}
                    name="cvc"
                    placeholder="cvc"
                    value={card.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                <input type="submit" />

        </form>
        </div>
    )
}