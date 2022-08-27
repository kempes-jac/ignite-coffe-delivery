import { Address, DeliveryItem, PaymentType } from '../../contexts/CartContext'

export enum CartActionsTypes {
  ADD_ITEM = 'ADD',
  REMOVE_ITEM = 'REMOVE',
  SET_ADDRESS = 'ADDRESS',
  SET_PAYMENT = 'PAYMENT',
}

export function addItemToCartAction(item: DeliveryItem) {
  return {
    type: CartActionsTypes.ADD_ITEM,
    payload: {
      ...item,
    },
  }
}

export function removeItemFromCartAction(id: string) {
  return {
    type: CartActionsTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

export function setAddressAction(address: Address) {
  return {
    type: CartActionsTypes.SET_ADDRESS,
    payload: {
      address,
    },
  }
}

export function setPaymentAction(payment: PaymentType) {
  return {
    type: CartActionsTypes.SET_ADDRESS,
    payload: {
      payment,
    },
  }
}
