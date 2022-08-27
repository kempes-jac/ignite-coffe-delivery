import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  CartContainer,
  HeaderContainer,
  ItemsContainer,
  SpacerContainer,
} from './styles'

export function Header() {
  const { itemCount, address } = useContext(CartContext)

  const { cidade, uf } = address

  const location = cidade !== '' && uf !== '' ? `${cidade}, ${uf}` : null
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Imagem de copo de café com desenho de foguete sendo lançado seguido do texto 'Coffee Delivery'"
        />
      </NavLink>
      <nav>
        {location ? (
          <NavLink className="city" to="" title="Home">
            <MapPin size={22} weight="fill" />
          </NavLink>
        ) : (
          <SpacerContainer />
        )}

        <CartContainer>
          <NavLink className="cart" to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {itemCount === 0 ? (
            <SpacerContainer />
          ) : (
            <ItemsContainer>{itemCount}</ItemsContainer>
          )}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
