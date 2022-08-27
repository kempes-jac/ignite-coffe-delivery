import { createContext, ReactNode, useReducer } from 'react'

import COFFEE_EXPRESSO from '../assets/products-images/expresso.png'
import COFFEE_AMERICAN from '../assets/products-images/americano.png'
import COFFEE_CREAMY from '../assets/products-images/expresso-cremoso.png'
import COFFEE_ICY from '../assets/products-images/cafe-gelado.png'
import COFFEE_MILK from '../assets/products-images/cafe-com-leite.png'
import COFFEE_LATTE from '../assets/products-images/latte.png'
import COFFEE_CAPUCCINO from '../assets/products-images/capuccino.png'
import COFFEE_MACCHIATO from '../assets/products-images/macchiato.png'
import COFFEE_MOCACCINO from '../assets/products-images/mocaccino.png'
import COFFEE_CHOCOLATE from '../assets/products-images/chocolate-quente.png'
import COFFEE_CUBAN from '../assets/products-images/cubano.png'
import COFFEE_HAWAIIAN from '../assets/products-images/havaiano.png'
import COFFEE_ARABIAN from '../assets/products-images/arabe.png'
import COFFEE_IRISH from '../assets/products-images/irlandes.png'
import { CartReducer } from '../reducers/Delivery/reducer'
import {
  addItemToCartAction,
  removeItemFromCartAction,
  replaceItemInCartAction,
  setAddressAction,
  setPaymentAction,
} from '../reducers/Delivery/actions'

export const CoffeeTypes = [
  'TRADICIONAL',
  'ESPECIAL',
  'COM LEITE',
  'ALCOÓLICO',
  'GELADO',
] as const

export type CoffeeType = typeof CoffeeTypes[number]

export type CoffeeTag = keyof typeof CoffeeTypes

export interface Coffee {
  id: string
  image: string
  title: string
  description: string
  value: number
  tags: CoffeeType[]
}

export const CoffeeList: Coffee[] = [
  {
    id: 'c1',
    image: COFFEE_EXPRESSO,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    value: 9.9,
  },
  {
    id: 'c2',
    image: COFFEE_AMERICAN,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    value: 9.9,
  },
  {
    id: 'c3',
    image: COFFEE_CREAMY,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa ',
    tags: ['TRADICIONAL'],
    value: 9.9,
  },
  {
    id: 'c4',
    image: COFFEE_ICY,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    value: 9.9,
  },
  {
    id: 'c5',
    image: COFFEE_MILK,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    value: 9.9,
  },
  {
    id: 'c6',
    image: COFFEE_LATTE,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro do leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    value: 9.9,
  },
  {
    id: 'c7',
    image: COFFEE_CAPUCCINO,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    value: 9.9,
  },
  {
    id: 'c8',
    image: COFFEE_MACCHIATO,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    value: 9.9,
  },

  {
    id: 'c9',
    image: COFFEE_MOCACCINO,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    value: 9.9,
  },
  {
    id: 'c10',
    image: COFFEE_CHOCOLATE,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    value: 9.9,
  },
  {
    id: 'c11',
    image: COFFEE_CUBAN,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    value: 9.9,
  },
  {
    id: 'c12',
    image: COFFEE_HAWAIIAN,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    value: 9.9,
  },
  {
    id: 'c13',
    image: COFFEE_ARABIAN,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    value: 9.9,
  },
  {
    id: 'c14',
    image: COFFEE_IRISH,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    value: 9.9,
  },
]

export interface DeliveryItem {
  item: Coffee
  amount: number
}

export interface Address {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export const PaymentTypes = [
  'cartão de crédito',
  'cartão de débito',
  'dinheiro',
] as const

export type PaymentType = typeof PaymentTypes[number]

export const DELIVERY_TAX = 3.5

export interface DeliveryItemsState {
  address: Address
  paymentType: PaymentType | null
  cart: DeliveryItem[]
  itemCount: number
  addItemToCart: (item: DeliveryItem) => void
  removeItemFromCart: (id: string) => void
  replaceItemInCart: (item: DeliveryItem) => void
  setAddress: (address: Address) => void
  setPayment: (payment: PaymentType) => void
}

export interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as DeliveryItemsState)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, {
    cart: [],
    counter: 0,
    address: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      uf: '',
      cidade: '',
    },
    payment: null,
  })

  function addItemToCartLocal(item: DeliveryItem): void {
    dispatch(addItemToCartAction(item))
  }

  function replaceItemInCart(item: DeliveryItem): void {
    dispatch(replaceItemInCartAction(item))
  }

  function removeItemFromCart(id: string): void {
    dispatch(removeItemFromCartAction(id))
  }

  function setAddress(address: Address): void {
    dispatch(setAddressAction(address))
  }

  function setPayment(payment: PaymentType): void {
    dispatch(setPaymentAction(payment))
  }

  const { address, cart, counter, payment } = cartState

  return (
    <CartContext.Provider
      value={{
        address,
        paymentType: payment,
        cart,
        itemCount: counter,
        addItemToCart: addItemToCartLocal,
        replaceItemInCart,
        removeItemFromCart,
        setAddress,
        setPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
