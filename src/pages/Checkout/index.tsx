import {
  AdditionalDataContainer,
  AddressContainer,
  BillContainer,
  CheckoutMainContainer,
  PaymentContainer,
} from './styels'

export function Checkout() {
  return (
    <CheckoutMainContainer>
      <AdditionalDataContainer>
        <AddressContainer></AddressContainer>
        <PaymentContainer></PaymentContainer>
      </AdditionalDataContainer>
      <BillContainer></BillContainer>
    </CheckoutMainContainer>
  )
}
