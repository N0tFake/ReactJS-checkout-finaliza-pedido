import { useState } from "react"
import { PaymentContent } from "./components/payment-contents"
import { ProductsContent } from "./components/products-contents"
import * as Styled from './styled'

export const Tab = () => {

    const [currentTab, setCurrentTab] = useState('1')

    const tabs = [
        {
            id: 1,
            title: 'Products',
            content: <ProductsContent></ProductsContent>
        },
        {
            id: 2,
            title: 'Payments',
            content: <PaymentContent></PaymentContent>
        },
        {
            id: 3,
            title: 'Confirm',
            content: <PaymentContent></PaymentContent>
        }
    ]

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return (
        <Styled.Container>
            <div>
                <Styled.ContainerButton>
                    {tabs.map((tab, i) => 
                        <Styled.Button 
                            key={i} 
                            id={tab.id} 
                            disabled={currentTab === `${tab.id}`} 
                            onClick={(handleTabClick)}
                        > 
                            {tab.title} 
                        </Styled.Button>
                    )}
                </Styled.ContainerButton>
                <Styled.ContainerContent>
                    {tabs.map((tab,i) => 
                        <div key={i} type={tab.id}>
                            {currentTab === `${tab.id}` && tab.content}
                        </div>
                    )}
                </Styled.ContainerContent>
            </div>
        </Styled.Container>
    )
}