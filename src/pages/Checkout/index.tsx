import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  AdditionalDataContainer,
  AddressContainer,
  BillContainer,
  BillDetailsContainer,
  CheckoutMainContainer,
  PaymentContainer,
} from './styels'

export function Checkout() {
  const { address, paymentType, cart } = useContext(CartContext)
  return (
    <CheckoutMainContainer>
      <AdditionalDataContainer>
        <h3>Complete seu pedido</h3>
        <AddressContainer>
          <div>
            <MapPinLine size={22} />
          </div>
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <input type={'text'} placeholder={'CEP'} />
            <input type={'text'} placeholder={'Rua'} />
            <input type={'text'} placeholder={'Número'} />
            <input type={'text'} placeholder={'Complemento'} />
            <input type={'text'} placeholder={'Bairro'} />
            <input type={'text'} placeholder={'Cidade'} />
            <input type={'text'} placeholder={'UF'} />
          </div>
        </AddressContainer>
        <PaymentContainer></PaymentContainer>
      </AdditionalDataContainer>
      <BillContainer>
        <h3>Cafés selecionados</h3>
        <BillDetailsContainer />
      </BillContainer>
    </CheckoutMainContainer>
  )
}
