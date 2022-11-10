import Image from "next/image"
import { Handbag } from "phosphor-react"
import {  DebugCart, useShoppingCart } from "use-shopping-cart"
import { Container, Header, IconContainer } from "../styles/pages/app"
import logoImg from '../assets/logo.svg'
import Link from "next/link"

interface DefaultLayoutProps {
    children: React.ReactNode
}

export const DefaultLayout = ({children}:DefaultLayoutProps) => {

    const {cartCount} = useShoppingCart()
  return (
    <Container>
    <Header>
      <Link href="/">
        <Image src={logoImg} alt=""/>
      </Link>
      <IconContainer>
          <Handbag size={24} />
          <p>{cartCount}</p>
      </IconContainer>
      <DebugCart />
    </Header>
    {children}
  </Container>
  )
}