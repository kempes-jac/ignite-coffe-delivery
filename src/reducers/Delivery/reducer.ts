import { Address, DeliveryItem, PaymentType } from '../../contexts/CartContext'
import { CartActionsTypes } from './actions'

export interface CartReducerDispatch {
  type: CartActionsTypes
  payload: any
}

export interface CartState {
  cart: DeliveryItem[]
  counter: number
  address: Address
  payment: PaymentType | null
}

export function CartReducer(state: CartState, action: CartReducerDispatch) {
  switch (action.type) {
    case CartActionsTypes.ADD_ITEM: {
      const newCart = [...state.cart]
      const newCartItem = action.payload as DeliveryItem
      const itemOnCart = newCart.findIndex(
        (cartItem) => cartItem.item.id === newCartItem.item.id,
      )
      console.log(action.payload)

      if (itemOnCart >= 0) {
        newCart[itemOnCart].amount += newCartItem.amount
      } else {
        newCart.push(newCartItem)
      }

      const counter =
        newCart.reduce((acc, cartItem) => acc + cartItem.amount, 0) ?? 0

      return {
        ...state,
        cart: newCart,
        counter,
      }
    }
    case CartActionsTypes.REMOVE_ITEM: {
      const newCart = state.cart.filter(
        (cartItem) => cartItem.item.id !== action.payload,
      )

      const counter =
        newCart.reduce((acc, cartItem) => acc + cartItem.amount, 0) ?? 0
      return {
        ...state,
        cart: newCart,
        counter,
      }
    }
    default:
      return state
  }
}
