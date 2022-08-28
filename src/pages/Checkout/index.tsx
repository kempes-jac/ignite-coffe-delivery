import { AddressComponent } from './components/Address'
import { BillComponent } from './components/Bill'
import { PaymentComponent } from './components/Payment'
import { AdditionalDataContainer, CheckoutMainContainer } from './styels'

export function Checkout() {
  return (
    <CheckoutMainContainer>
      <AdditionalDataContainer>
        <h3>Complete seu pedido</h3>
        <AddressComponent />
        <PaymentComponent />
      </AdditionalDataContainer>
      <BillComponent />
    </CheckoutMainContainer>
  )
}
