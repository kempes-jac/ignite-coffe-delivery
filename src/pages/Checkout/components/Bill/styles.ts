import styled from 'styled-components'

export const BillContainer = styled.div`
  width: 40rem;
  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
  }
`

export const BillBodyContainer = styled.div``

export const DetailsContainer = styled.div`
  border: 1px solid black;

  padding: 2.5rem;

  /* height: 10rem; */
  width: 28rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* height: 5.57rem; */
  gap: 0.75rem;
`

export const FooterTextLine = styled.div`
  display: flex;

  flex-direction: row;

  justify-content: space-between;

  font-size: 0.875rem;
  font-weight: 400;

  align-items: baseline;
`

export const FooterTotalsLine = styled(FooterTextLine)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ValueContainer = styled.span`
  &::before {
    content: 'R$';
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  height: 2.5rem;

  border: 0;

  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-stretch: 100;
  font-size: 0.875rem;
  font-family: 700;
  line-height: 160%;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
