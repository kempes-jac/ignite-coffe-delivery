import styled from 'styled-components'
import { BaseHeaderContainer } from '../../styels'

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

export const AddressHeaderContainer = styled(BaseHeaderContainer)`
  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressBodyContainer = styled.div`
  /* border: 1px solid black; */

  display: flex;
  flex-wrap: wrap;

  width: 101%;
  gap: 0.75rem;
  padding: 0;
`

export const AddressBaseInput = styled.input`
  display: flex;
  flex-direction: row;

  height: 2.625rem;
  padding: 0.875rem;
  margin: 0;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

const DATA_REQUIREMENT = {
  optional: 'Opcional',
  required: 'Obrigatório',
  other: '',
}

interface InputWrapperProps {
  required: keyof typeof DATA_REQUIREMENT
}

export const InputWrapper = styled.div<InputWrapperProps>`
  color: ${(props) => props.theme['base-label']};
  font-style: italic;
  font-size: 0.875rem;
  position: relative;

  &::after {
    content: '${(props) => DATA_REQUIREMENT[props.required] as string}';
    position: absolute;
    right: 2rem;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);

    font-family: 'Roboto';
    font-style: italic;
    font-size: 0.875rem;
  }
`
