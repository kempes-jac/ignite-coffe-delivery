import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;

  margin-top: 2.5rem;

  padding: 0;

  img {
    position: relative;
    top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
    /* object-fit: none; */
  }

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;

    text-align: center;

    margin: 0.5rem 1.25rem 1.25rem 1.25rem;
  }
`

export const TagListContainer = styled.div`
  top: 7rem;

  justify-content: center;
  width: 100%;
  display: flex;

  align-items: center;
  gap: 4px;

  span {
    box-sizing: content-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    background: #f1e9c9;
    border-radius: 100px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
  }
`

export const FormContainer = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`

export const InteractiveContainer = styled.div`
  display: flex;

  width: 7.375rem;
  flex-direction: row;

  gap: 0.5rem;
`

export const ValueContainer = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;

  &::before {
    content: 'R$';
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    text-align: right;
    margin-right: 0.1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.background};

  border: 0;
  border-radius: 6px;

  width: 2.375rem;
  height: 2.375rem;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
