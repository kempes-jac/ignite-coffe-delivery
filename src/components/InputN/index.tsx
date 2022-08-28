import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputNumberContainer, InteractiveButton } from './styles'

export interface InputIntNumberProps {
  value?: number
  minValue?: number
  maxValue?: number
  step?: number
  height?: number
  changeValueHandler: (value: number) => void
}

export function InputIntNumber({
  minValue = 1,
  maxValue = 9,
  value = 1,
  step = 1,
  changeValueHandler,
  height = 2.375,
}: InputIntNumberProps) {
  const [currentValue, setValue] = useState<number>(value)

  function handlePlusClick() {
    if (currentValue < maxValue) {
      const curVal =
        currentValue + step <= maxValue ? currentValue + step : maxValue
      setValue(curVal)
      changeValueHandler(curVal)
    }
  }

  function handleMinusClick() {
    if (currentValue > minValue) {
      const curVal =
        currentValue - step >= minValue ? currentValue - step : minValue
      setValue(curVal)
      changeValueHandler(curVal)
    }
  }

  return (
    <InputNumberContainer height={height}>
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
