import styled from 'styled-components'
import { ButtonContainer } from '../../../../components/ImageButton/styles'
import { BaseHeaderContainer } from '../../styels'

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

export const PaymentHeaderContainer = styled(BaseHeaderContainer)`
  span {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentBodyContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`

export interface PaymentButtonContainerProps {
  selected: boolean
}

export const PaymentButtonContainer = styled(ButtonContainer)`
  width: 11.135rem;
  height: 3.1875rem;
`
