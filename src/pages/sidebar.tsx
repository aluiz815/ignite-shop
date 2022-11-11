import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import { CardContainer, SidebarContainer } from '../styles/pages/sidebar'
import {X} from 'phosphor-react'

interface SidebarProps {
    isOpen: boolean
}

export const Sidebar = ({isOpen}:SidebarProps) => {

    const {cartDetails,removeItem,formattedTotalPrice,cartCount,clearCart,handleCloseCart } = useShoppingCart()
    
    
    async function handleBuyProduct(){
        try {
            let products = []
            if(cartCount > 0) {
                Object.values(cartDetails ?? {}).map((entry) => (
                    products.push({price:entry.defaultPriceId,quantity:entry.quantity})
              ))
                const response = await axios.post('/api/checkout',{
                    line_items:products
                })
    
                const { checkoutUrl } = response.data
    
                window.location.href = checkoutUrl
                clearCart()
            }
        } catch (err) {
            alert('Falha ao redirecionar ao checkout')
        }
    }


    

  return (
    <SidebarContainer transform={isOpen ? 'show' : 'hidden'}>
        <button onClick={() => handleCloseCart()}>
            <X fill='bold' size={24}/>
        </button>
        <header>
            <h3>Sacola de compras</h3>
        </header>
        {Object.values(cartDetails ?? {}).map((entry) => (
            <CardContainer key={entry.id}>
            <Image src={entry.imageUrl} width="100" height="90" alt="" />
            <div>
                <h3>{entry.name}</h3>
                <span>{formatCurrencyString({ value: entry.price, currency: 'BRL' })}</span>
                <button onClick={()=> removeItem(entry.id)}>Remover</button>
            </div>
        </CardContainer>
      ))}
        <footer>
         <div>
             <p>Quantidade</p>
             <span>{cartCount} itens</span>
         </div>
         <div>
             <p>Valor total</p>
             <span>{formattedTotalPrice}</span>
         </div>
         <button onClick={handleBuyProduct}>Finalizar compra</button>
     </footer>
    </SidebarContainer>
  )
}
