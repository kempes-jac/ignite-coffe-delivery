import { CreditCard, CurrencyDollar } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, PaymentTypes } from '../../../../contexts/CartContext'
import {
  PaymentBodyContainer,
  PaymentButtonContainer,
  PaymentContainer,
  PaymentHeaderContainer,
} from './styles'

export function PaymentComponent() {
  const { paymentType, setPayment } = useContext(CartContext)
  const paymentTypes = PaymentTypes

  return (
    <PaymentContainer>
      <PaymentHeaderContainer>
        <h4>
          <span>
            <CurrencyDollar size={22} />
          </span>
          Endereço de Entrega
        </h4>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </PaymentHeaderContainer>
      <PaymentBodyContainer>
        {paymentTypes.map((currentPaymentType) => {
          return (
            <PaymentButtonContainer
              type="button"
              key={currentPaymentType}
              selected={paymentType === currentPaymentType}
              onClick={() => {
                setPayment(currentPaymentType)
              }}
            >
              <span>
                <CreditCard size={16} />
              </span>
              {currentPaymentType}
            </PaymentButtonContainer>
          )
        })}
      </PaymentBodyContainer>
    </PaymentContainer>
  )
}
