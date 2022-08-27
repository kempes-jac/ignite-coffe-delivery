import styled from 'styled-components'

export const HomeBodyContainer = styled.main``

export const HomeBodyHeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    box-sizing: content-box;
  }

  div {
    display: flex;

    flex-direction: row;

    gap: 8px;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.375rem 0.75rem;
    gap: 8px;

    border: 1px solid #dbac2c;
    border-radius: 1rem;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const HomeBodyMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
