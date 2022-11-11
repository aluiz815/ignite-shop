import { AppProps } from "next/app"
import { CartProvider } from "use-shopping-cart"
import { globalStyles } from "../styles/global"

globalStyles()
import { DefaultLayout } from "./layout"
export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider  
    cartMode="checkout-session"
    stripe={process.env.STRIPE_PUBLIC_KEY}
    currency="BRL">
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
    </CartProvider>
  )
}


