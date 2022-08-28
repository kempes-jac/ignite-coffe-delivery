import styled from 'styled-components'

export const SuccessContainer = styled.div``

export const SuccessHeaderContainer = styled.header`
  margin-top: 5rem;
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    margin-top: 4px;
    color: ${(props) => props.theme['base-subtitle']};

    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const SuccessMainContainer = styled.main`
  display: flex;

  flex-direction: row;

  gap: 6.375rem;
`

export const SuccessDataContainer = styled.div`
  margin-top: 2.5rem;

  width: 32.875rem;
  height: 16.875rem;
  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    linear-gradient(
      to top left,
      ${(props) => props.theme.purple},
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.yellow}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`
export const SuccessDataContentContainer = styled.div`
  padding: 2.5rem;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SuccessDataLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  align-items: center;
`

const BULLET_COLORS = {
  yellow: 'yellow',
  purple: 'purple',
  yellow_dark: 'yellow-dark',
} as const

interface BulletContainerProps {
  bulletColor: keyof typeof BULLET_COLORS
}

export const BulletContainer = styled.div<BulletContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  background-color: ${(props) => props.theme[BULLET_COLORS[props.bulletColor]]};
  color: ${(props) => props.theme.white};
`

export const TextBoxContainer = styled.div``

export const SpanContainer = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`

export const SuccessImageContainer = styled.div`
  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`
