import React from 'react'
import Stripe from 'stripe'
import Image from 'next/image'
import axios from 'axios'
import Head from 'next/head'
import { GetStaticProps,GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { stripe } from '../../lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

export interface ProductProps {
   product: {
        id:string,
        name:string,
        imageUrl:string,
        price: number,
        description:string,
        defaultPriceId:string,
        currency:string,
        sku:string
   }
}

export default function ProductId({ product }: ProductProps) {
  
    const { isFallback } = useRouter()

    const { addItem } = useShoppingCart()

    if(isFallback) {
        return <p>Loading ...</p>
    }
  

    async function handleBuyProduct(){
        try {
            const response = await axios.post('/api/checkout',{
                priceId: product.defaultPriceId
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            alert('Falha ao redirecionar ao checkout')
        }
    }



    return (
    <>
    <Head>
        <title>{product.name} | Ignite Shop</title>
    </Head>
    <ProductContainer>
        <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
            <h1>{product.name}</h1>
            <span>{formatCurrencyString({ value: product.price, currency: 'BRL' })}</span>
            <p>{product.description}</p>

            <button onClick={() => addItem(product, { count: 1 })}>Colocar na sacola</button>

        </ProductDetails>
    </ProductContainer>
    </>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
    return {
        paths: [{
            params: {id: ''}
        }],
        fallback:'blocking'
    }
}

export const getStaticProps: GetStaticProps<any,{ id:string }> = async ({ params }) => {
    
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand:['default_price']
    })
    const price = product.default_price as Stripe.Price
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                description: product.description,
                defaultPriceId:price.id,
                currency:price.currency,
                sku:product.id
            }
        },
        revalidate: 60  * 60 * 1
    }
}