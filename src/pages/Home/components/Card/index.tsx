import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { InputIntNumber } from '../../../../components/InputN'
import { CartContext, CoffeeType } from '../../../../contexts/CartContext'
import {
  CardContainer,
  FormButtonContainer,
  FormContainer,
  InteractiveContainer,
  TagListContainer,
  ValueContainer,
} from './styles'

export interface CardProps {
  id: string
  image: string
  tags: string[]
  title: string
  description: string
  value: number
}

export function Card({
  id,
  image,
  tags,
  title,
  description,
  value,
}: CardProps) {
  const { addItemToCart } = useContext(CartContext)

  const [amount, setAmount] = useState<number>(1)

  function handleChangeAmount(value: number): void {
    setAmount(value)
  }

  function handleAddItemToCart() {
    addItemToCart({
      amount,
      item: {
        id,
        image,
        tags: tags as CoffeeType[],
        title,
        description,
        value,
      },
    })
  }

  return (
    <CardContainer>
      <img src={image} alt="" />
      <TagListContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagListContainer>
      <h4>{title}</h4>
      <p>{description}</p>
      <FormContainer>
        <ValueContainer>{value}</ValueContainer>
        <InteractiveContainer>
          <InputIntNumber value={1} changeValueHandler={handleChangeAmount} />
          <FormButtonContainer onClick={handleAddItemToCart}>
            <ShoppingCart size={22} weight={'fill'} />
          </FormButtonContainer>
        </InteractiveContainer>
      </FormContainer>
    </CardContainer>
  )
}
