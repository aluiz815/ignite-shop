import Image from "next/image"
import { Handbag } from "phosphor-react"
import {  useShoppingCart } from "use-shopping-cart"
import { Container, Header, HeaderIconContainer, IconContainer } from "../styles/pages/app"
import logoImg from '../assets/logo.svg'
import Link from "next/link"
import { Sidebar } from "./sidebar"

interface DefaultLayoutProps {
    children: React.ReactNode
}

export const DefaultLayout = ({children}:DefaultLayoutProps) => {

    const {cartCount,handleCartClick,shouldDisplayCart} = useShoppingCart()

  return (
    <Container>
    <Header>
      <Link href="/">
        <Image src={logoImg} alt=""/>
      </Link>
      <IconContainer onClick={()=>handleCartClick()}>
          <Handbag size={24} />
          {cartCount > 0 ? <HeaderIconContainer>{cartCount}</HeaderIconContainer> : ''}
      </IconContainer>
    </Header>
    {children}
    <Sidebar isOpen={shouldDisplayCart}/>
  </Container>
  )
}