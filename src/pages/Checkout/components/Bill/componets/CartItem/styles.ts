import styled from 'styled-components'
import { ButtonContainer } from '../../../../../../components/ImageButton/styles'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;

  margin: 0;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-card']};

  justify-content: space-between;
  align-items: flex-start;
`

export const MainDataContainer = styled.div`
  width: 16rem;

  display: flex;

  gap: 0.5rem;
`

export const ImageContainer = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    width: inherit;
    height: inherit;
  }
`

export const DataContainer = styled.div`
  width: 11rem;

  h4 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ToolBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
`

export const ToolBarButton = styled(ButtonContainer)`
  /* padding-left: 8px; */
  /* padding-right: 8px; */
  padding: 8px;
  align-items: center;
  gap: 0.5rem;
`

export const LineBreakerContainer = styled.hr`
  width: 100%;
  height: 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export const ValueContainer = styled.span`
  width: 4rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;

  &::before {
    content: 'R$ ';
  }
`
