import styled from 'styled-components'

export const CheckoutMainContainer = styled.main`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  width: 72rem;
  gap: 2rem;
`

export const AdditionalDataContainer = styled.div`
  width: 49rem;
  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
  }
`

export const BaseHeaderContainer = styled.div`
  h4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;

    height: 1.3125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-left: 1.375rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
