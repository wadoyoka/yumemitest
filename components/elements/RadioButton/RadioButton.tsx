'use client'

import { useCallback, useState } from 'react'
import { RadioButtonView } from './RadioButtonView'

interface RadioButtonProps {
  size?: number
  strokeWidth?: number
  isSelected?: boolean
  onChange?: (selected: boolean) => void
}

export default function RadioButton({
  size = 24,
  strokeWidth = 2,
  isSelected: initialIsSelected = false,
  onChange,
}: RadioButtonProps) {
  const [isSelected, setIsSelected] = useState(initialIsSelected)

  const handleClick = useCallback(() => {
    const newSelectedState = !isSelected
    setIsSelected(newSelectedState)
    onChange?.(newSelectedState)
  }, [isSelected, onChange])

  return (
    <RadioButtonView
      size={size}
      strokeWidth={strokeWidth}
      isSelected={isSelected}
      onClick={handleClick}
    />
  )
}
