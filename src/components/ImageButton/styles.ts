import styled from 'styled-components'

export interface ButtonContainerProps {
  selected?: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 5.6875rem;
  height: 2rem;

  border-radius: 6px;
  border: 0;
  box-shadow: none;
  outline: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1rem;

  gap: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) => {
    return props.selected
      ? `
      background-color: ${props.theme['purple-light']};
      border: 1px solid ${props.theme.purple};
      
    `
      : `
      background-color: ${props.theme['base-button']};
      color: ${props.theme['base-text']};`
  }}

  font-size: 0.75rem;
  text-transform: uppercase;

  span {
    color: ${(props) => props.theme.purple};
  }
`
