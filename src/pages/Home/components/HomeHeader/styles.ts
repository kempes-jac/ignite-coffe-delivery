import styled from 'styled-components'

export const HomeHeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  height: 34rem;
`

export const TitleContainer = styled.div`
  width: 36.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme['base-title']};

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  table {
    width: 100%;
  }
`

const BULLET_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface BulletProps {
  color: keyof typeof BULLET_COLOR
}

export const FeatureContainer = styled.span<BulletProps>`
  display: flex;
  align-items: center;
  margin: 20px auto;
  gap: 0.75rem;

  .bullet {
    background-color: ${(props) => props.theme[BULLET_COLOR[props.color]]};
    color: ${(props) => props.theme.background};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.5rem;
    border: 0;
  }
`
