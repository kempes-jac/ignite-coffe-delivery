import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext, DELIVERY_TAX } from '../../../../contexts/CartContext'
import { CartItem } from './componets/CartItem'
import {
  BillContainer,
  BillBodyContainer,
  CheckoutButton,
  DetailsContainer,
  FooterContainer,
  FooterTextLine,
  FooterTotalsLine,
  ValueContainer,
} from './styles'

export function BillComponent() {
  const { cart, replaceItemInCart, removeItemFromCart, validCheckout } =
    useContext(CartContext)

  const navigate = useNavigate()

  const totalItems = cart.reduce((acc, cartItem) => {
    return acc + cartItem.amount * cartItem.item.value
  }, 0)

  const deliveryTax = DELIVERY_TAX

  const total = deliveryTax + totalItems

  function handleCheckout() {
    if (validCheckout) {
      navigate('/success')
    }
  }
  return (
    <BillContainer>
      <h3>Cafés selecionados</h3>
      <DetailsContainer>
        <BillBodyContainer>
          {cart.map((cartItem) => {
            return (
              <CartItem
                cartItem={cartItem}
                removeItemFromCart={removeItemFromCart}
                replaceItemInCart={replaceItemInCart}
                key={cartItem.item.id}
              />
            )
          })}
        </BillBodyContainer>
        <FooterContainer>
          <FooterTextLine>
            <span>Total de itens</span>
            <ValueContainer>
              {totalItems.toFixed(2).replace('.', ',')}
            </ValueContainer>
          </FooterTextLine>
          <FooterTextLine>
            <span>Entrega</span>
            <ValueContainer>
              {deliveryTax.toFixed(2).replace('.', ',')}
            </ValueContainer>
          </FooterTextLine>
          <FooterTotalsLine>
            <span>Total</span>
            <ValueContainer>
              {total.toFixed(2).replace('.', ',')}
            </ValueContainer>
          </FooterTotalsLine>
          <CheckoutButton onClick={handleCheckout}>
            CONFIRMAR PEDIDO
          </CheckoutButton>
        </FooterContainer>
      </DetailsContainer>
    </BillContainer>
  )
}
