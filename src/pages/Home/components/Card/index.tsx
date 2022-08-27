import { ShoppingCart } from 'phosphor-react'
import { InputIntNumber } from '../../../../components/InputN'
import {
  CardContainer,
  FormButtonContainer,
  FormContainer,
  InteractiveContainer,
  TagListContainer,
  ValueContainer,
} from './styles'

export interface CardProps {
  image: string
  tags: string[]
  title: string
  description: string
  value: number
}

export function Card({ image, tags, title, description, value }: CardProps) {
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
          <InputIntNumber value={1} />
          <FormButtonContainer>
            <ShoppingCart size={22} weight={'fill'} />
          </FormButtonContainer>
        </InteractiveContainer>
      </FormContainer>
    </CardContainer>
  )
}
