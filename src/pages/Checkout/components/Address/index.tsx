import { MapPinLine } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { setAddressAction } from '../../../../reducers/Delivery/actions'
import {
  AddressBaseInput,
  AddressBodyContainer,
  AddressContainer,
  AddressHeaderContainer,
  InputWrapper,
} from './styles'

export function AddressComponent() {
  const { address, setAddress } = useContext(CartContext)
  return (
    <AddressContainer>
      <AddressHeaderContainer>
        <h4>
          <span>
            <MapPinLine size={22} />
          </span>
          Endereço de Entrega
        </h4>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </AddressHeaderContainer>
      <AddressBodyContainer>
        <AddressBaseInput
          type={'text'}
          placeholder={'CEP'}
          size={12}
          onChange={(input) => {
            address.cep = input.target.value
            setAddress(address)
          }}
        />
        <AddressBaseInput
          type={'text'}
          placeholder={'Rua'}
          size={56}
          onChange={(input) => {
            address.rua = input.target.value
            setAddress(address)
          }}
        />
        <AddressBaseInput
          type={'text'}
          placeholder={'Número'}
          size={12}
          onChange={(input) => {
            address.numero = input.target.value
            setAddress(address)
          }}
        />
        <InputWrapper required={address.complemento ? 'other' : 'optional'}>
          <AddressBaseInput
            id="complemento"
            type={'text'}
            placeholder={'Complemento'}
            size={37}
            onChange={(input) => {
              address.complemento = input.target.value
              setAddress(address)
            }}
          />
        </InputWrapper>
        <AddressBaseInput
          type={'text'}
          placeholder={'Bairro'}
          size={12}
          onChange={(input) => {
            address.bairro = input.target.value
            setAddress(address)
          }}
        />
        <AddressBaseInput
          type={'text'}
          placeholder={'Cidade'}
          size={28}
          onChange={(input) => {
            address.cidade = input.target.value
            setAddress(address)
          }}
        />
        <AddressBaseInput
          type={'text'}
          placeholder={'UF'}
          size={2}
          onChange={(input) => {
            address.uf = input.target.value
            setAddress(address)
          }}
        />
      </AddressBodyContainer>
    </AddressContainer>
  )
}
