import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  padding: 2rem 0;

  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 0.875rem;
  }

  a {
    height: 2.375rem;
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    font-size: 0.875rem;

    padding: 0.5rem;

    text-decoration: none;
  }

  .cart {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    width: 2.375rem;
  }

  .city {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
  }
`

export const CartContainer = styled.div`
  width: 3.875rem;

  display: flex;
  flex-direction: row;

  /* align-items: flex-start; */
`

export const ItemsContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  left: -0.521875rem;
  top: -0.5rem;

  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.875rem;

  text-align: center;
  letter-spacing: -0.06em;

  color: ${(props) => props.theme.white};
`
export const SpacerContainer = styled.div`
  width: 0.625rem;
`
