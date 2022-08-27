import styled from 'styled-components'

export const CheckoutMainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const AdditionalDataContainer = styled.div`
  width: 40rem;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  height: 23.25rem;
  margin-bottom: 0.875rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  height: 12.9375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
`

export const BillContainer = styled.div``

export const BillDetailsContainer = styled.div`
  border: 1px solid black;
  height: 10rem;
  width: 28rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`
