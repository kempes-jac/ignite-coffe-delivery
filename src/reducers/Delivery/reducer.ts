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
  validCheckout: boolean
}

export function CartReducer(state: CartState, action: CartReducerDispatch) {
  function validateCheckout(
    payment: PaymentType | null,
    address: Address,
    counter: number,
  ): boolean {
    const { cidade, uf, rua, numero, bairro, cep } = address
    return (
      !!payment &&
      counter > 0 &&
      !!cidade &&
      !!uf &&
      !!rua &&
      !!numero &&
      !!bairro &&
      !!cep
    )
  }
  switch (action.type) {
    case CartActionsTypes.ADD_ITEM: {
      const newCart = [...state.cart]
      const newCartItem = action.payload as DeliveryItem
      const itemOnCart = newCart.findIndex(
        (cartItem) => cartItem.item.id === newCartItem.item.id,
      )

      if (itemOnCart >= 0) {
        newCart[itemOnCart].amount += newCartItem.amount
      } else {
        newCart.push(newCartItem)
      }

      const counter =
        newCart.reduce((acc, cartItem) => acc + cartItem.amount, 0) ?? 0

      const validCheckout = validateCheckout(
        state.payment,
        state.address,
        counter,
      )

      return {
        ...state,
        cart: newCart,
        counter,
        validCheckout,
      }
    }
    case CartActionsTypes.REPLACE_ITEM: {
      const newCart = [...state.cart]
      const newCartItem = action.payload as DeliveryItem
      const itemOnCart = newCart.findIndex(
        (cartItem) => cartItem.item.id === newCartItem.item.id,
      )

      newCart[itemOnCart] = newCartItem

      const counter =
        newCart.reduce((acc, cartItem) => acc + cartItem.amount, 0) ?? 0

      const validCheckout = validateCheckout(
        state.payment,
        state.address,
        counter,
      )

      return {
        ...state,
        cart: newCart,
        counter,
        validCheckout,
      }
    }
    case CartActionsTypes.REMOVE_ITEM: {
      const newCart = state.cart.filter(
        (cartItem) => cartItem.item.id !== action.payload.id,
      )

      const counter =
        newCart.reduce((acc, cartItem) => acc + cartItem.amount, 0) ?? 0

      const validCheckout = validateCheckout(
        state.payment,
        state.address,
        counter,
      )

      return {
        ...state,
        cart: newCart,
        counter,
        validCheckout,
      }
    }
    case CartActionsTypes.SET_ADDRESS: {
      const newState = {
        ...state,
        address: action.payload.address,
      }

      const validCheckout = validateCheckout(
        state.payment,
        newState.address,
        state.counter,
      )

      newState.validCheckout = validCheckout

      return newState
    }
    case CartActionsTypes.SET_PAYMENT: {
      const newState = {
        ...state,
        payment: action.payload.payment,
      }

      const validCheckout = validateCheckout(
        newState.payment,
        state.address,
        state.counter,
      )

      newState.validCheckout = validCheckout

      return newState
    }
    default:
      return state
  }
}
