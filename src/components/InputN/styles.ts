import styled from 'styled-components'

export interface InputNumberCOntainerProps {
  height: number
}

export const InputNumberContainer = styled.div<InputNumberCOntainerProps>`
  display: flex;

  flex-direction: row;
  align-items: center;

  width: 4.5rem;
  height: ${(props) => props.height}rem;

  background-color: ${(props) => props.theme['base-button']};

  gap: 0;

  border-radius: 6px;
  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    width: 1.25rem;
    text-align: center;
    &::before {
      content: '';
    }
  }
`

export const InteractiveButton = styled.button`
  background-color: inherit;

  color: ${(props) => props.theme.purple};

  width: 1.625rem !important;
  height: inherit;

  border-radius: inherit;

  border: 0;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
