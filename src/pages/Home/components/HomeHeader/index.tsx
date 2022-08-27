import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { FeatureContainer, HomeHeaderContainer, TitleContainer } from './styles'
import logo from '../../../../assets/coffee-delivery.png'

export function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Como o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <FeatureContainer color={'yellowDark'}>
                  <ShoppingCart
                    size={16}
                    weight={'fill'}
                    className={'bullet'}
                  />
                  Compra simples e segura
                </FeatureContainer>
              </td>
              <td>
                <FeatureContainer color={'baseText'}>
                  <Package size={16} weight={'fill'} className={'bullet'} />
                  Embalagem mantém o café intacto
                </FeatureContainer>
              </td>
            </tr>
            <tr>
              <td>
                <FeatureContainer color={'yellow'}>
                  <Timer size={16} weight={'fill'} className={'bullet'} />
                  Entrega rápida e rastreada
                </FeatureContainer>
              </td>
              <td>
                <FeatureContainer color={'purple'}>
                  <Coffee size={16} weight={'fill'} className={'bullet'} />O
                  café chega fresquinho até você
                </FeatureContainer>
              </td>
            </tr>
          </tbody>
        </table>
      </TitleContainer>
      <img src={logo} alt="" />
    </HomeHeaderContainer>
  )
}
