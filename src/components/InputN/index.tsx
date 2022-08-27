import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputNumberContainer, InteractiveButton } from './styles'

export interface InputIntNumberProps {
  value?: number
  minValue?: number
  maxValue?: number
  step?: number
}

export function InputIntNumber({
  minValue = 1,
  maxValue = 9,
  value = 1,
  step = 1,
}: InputIntNumberProps) {
  const [currentValue, setValue] = useState<number>(value)

  function handlePlusClick() {
    if (currentValue < maxValue) setValue(currentValue + step)
  }

  function handleMinusClick() {
    if (currentValue > minValue) setValue(currentValue - step)
  }

  return (
    <InputNumberContainer>
      <InteractiveButton onClick={handleMinusClick}>
        <Minus size={14} />
      </InteractiveButton>
      <span>{currentValue}</span>
      <InteractiveButton onClick={handlePlusClick}>
        <Plus size={14} />
      </InteractiveButton>
    </InputNumberContainer>
  )
}
