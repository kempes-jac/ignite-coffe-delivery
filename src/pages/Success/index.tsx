import {
  BulletContainer,
  SpanContainer,
  SuccessContainer,
  SuccessDataContainer,
  SuccessDataContentContainer,
  SuccessDataLineContainer,
  SuccessHeaderContainer,
  SuccessImageContainer,
  SuccessMainContainer,
  TextBoxContainer,
} from './styles'

import successImage from '../../assets/success.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { address, paymentType } = useContext(CartContext)
  return (
    <SuccessContainer>
      <SuccessHeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que lgo o café chegará até você</p>
      </SuccessHeaderContainer>
      <SuccessMainContainer>
        <SuccessDataContainer>
          <SuccessDataContentContainer>
            <SuccessDataLineContainer>
              <BulletContainer bulletColor={'purple'}>
                <MapPin size={16} weight={'fill'} />
              </BulletContainer>
              <TextBoxContainer>
                <p>
                  Entrega em{' '}
                  <SpanContainer>{`${address.rua}, ${address.numero}`}</SpanContainer>
                </p>
                <p>{`${address.bairro} - ${address.cidade}, ${address.uf}`}</p>
              </TextBoxContainer>
            </SuccessDataLineContainer>
            <SuccessDataLineContainer>
              <BulletContainer bulletColor={'yellow'}>
                <Timer size={16} weight={'fill'} />
              </BulletContainer>
              <TextBoxContainer>
                <p>Previsão de entrega</p>
                <p>
                  <SpanContainer>20 min - 30 min</SpanContainer>
                </p>
              </TextBoxContainer>
            </SuccessDataLineContainer>
            <SuccessDataLineContainer>
              <BulletContainer bulletColor={'yellow_dark'}>
                <CurrencyDollar size={16} weight={'fill'} />
              </BulletContainer>
              <TextBoxContainer>
                <p>Pagamento na entrega</p>
                <p>
                  <SpanContainer>{paymentType}</SpanContainer>
                </p>
              </TextBoxContainer>
            </SuccessDataLineContainer>
          </SuccessDataContentContainer>
        </SuccessDataContainer>
        <SuccessImageContainer>
          <img src={successImage} alt="" />
        </SuccessImageContainer>
      </SuccessMainContainer>
    </SuccessContainer>
  )
}
