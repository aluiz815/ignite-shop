import Image from "next/image";
import Stripe from 'stripe'
import Link from "next/link";
import Head from 'next/head'
import { GetStaticProps } from "next";
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home";
import { stripe } from "../lib/stripe";
import 'keen-slider/keen-slider.min.css'
import { Handbag } from "phosphor-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

interface HomeProps {
  products: {
    id:string,
    name:string,
    imageUrl:string,
    price: number,
    defaultPriceId:string,
  }[]
}

export default function Home({ products }:HomeProps) {


  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing:48,
    }
  })

  return (
    <>
    <Head>
      <title>Ignite Shop</title>
    </Head>
      
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <div key={product.id}>
              <Product className="keen-slider__slide">
              <Link href={`/product/${product.id}`}  prefetch={false}>
                <Image src={product.imageUrl} alt="" width={520} height={480}/>
              </Link>
                <footer>
                  <strong>{product.name}</strong>
                  <span>{formatCurrencyString({ value: product.price, currency: 'BRL' })}</span>
                  <button   onClick={() => addItem(product, { count: 1 })}>
                    <Handbag size={32}/>
                  </button>
                </footer>
              </Product>
            
          </div>
        )
      })}
    </HomeContainer>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand:['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId:price.id
    }
  })


  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  }
}
