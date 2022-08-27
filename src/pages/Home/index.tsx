import { HomeContainer } from './styles'

import { HomeHeader } from './components/HomeHeader'
import { HomeBody } from './components/HomeBody'
import { HomeFooter } from './components/HomeFooter'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </HomeContainer>
  )
}
