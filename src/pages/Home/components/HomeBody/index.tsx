import { CoffeeList, CoffeeTypes } from '../../../../contexts/CartContext'
import { Card } from '../Card'
import {
  HomeBodyContainer,
  HomeBodyHeaderContainer,
  HomeBodyMainContainer,
} from './styles'

export function HomeBody() {
  const coffees = CoffeeList

  const coffeeTags = CoffeeTypes

  return (
    <HomeBodyContainer>
      <HomeBodyHeaderContainer>
        <h3>Nossos Cafés</h3>
        <div>
          {coffeeTags.map((coffeeType) => {
            return <span key={coffeeType}>{coffeeType}</span>
          })}
        </div>
      </HomeBodyHeaderContainer>
      <HomeBodyMainContainer>
        {coffees.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.image}
              tags={product.tags}
              title={product.title}
              value={product.value}
              description={product.description}
              id={product.id}
            />
          )
        })}
      </HomeBodyMainContainer>
    </HomeBodyContainer>
  )
}
