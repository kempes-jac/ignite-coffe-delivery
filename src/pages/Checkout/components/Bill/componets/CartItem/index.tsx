import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { ButtonContainer } from '../../../../../../components/ImageButton/styles'
import { InputIntNumber } from '../../../../../../components/InputN'
import { DeliveryItem } from '../../../../../../contexts/CartContext'
import {
  CartItemContainer,
  DataContainer,
  ImageContainer,
  LineBreakerContainer,
  MainDataContainer,
  ToolBarButton,
  ToolBarContainer,
  ValueContainer,
} from './styles'

export interface CartItemProps {
  cartItem: DeliveryItem
  replaceItemInCart: (item: DeliveryItem) => void
  removeItemFromCart: (id: string) => void
}

export function CartItem({
  cartItem,
  replaceItemInCart,
  removeItemFromCart,
}: CartItemProps) {
  const { item, amount } = cartItem

  function handleCurrentAmount(value: number) {
    const newCartItem = {
      ...cartItem,
      amount: value,
    }
    replaceItemInCart(newCartItem)
  }

  function handleRemoveItem(): void {
    removeItemFromCart(cartItem.item.id)
  }

  return (
    <>
      <CartItemContainer>
        <MainDataContainer>
          <ImageContainer>
            <img src={item.image} alt="" />
          </ImageContainer>
          <DataContainer>
            <h4>{item.title}</h4>
            <ToolBarContainer>
              <InputIntNumber
                changeValueHandler={handleCurrentAmount}
                value={amount}
                height={2}
              />
              <ToolBarButton selected={false} onClick={handleRemoveItem}>
                <span>
                  <Trash />
                </span>
                remover
              </ToolBarButton>
            </ToolBarContainer>
          </DataContainer>
        </MainDataContainer>
        <ValueContainer>
          {item.value.toFixed(2).replace('.', ',')}
        </ValueContainer>
      </CartItemContainer>
      <LineBreakerContainer />
    </>
  )
}
