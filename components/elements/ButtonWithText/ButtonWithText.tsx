'use client'

import { useCallback, useState } from 'react'
import { ButtonWithTextView } from './ButtonWithTextView'

interface ButtonWithTextProps {
  ButtonSize?: number
  ButtonStrokeWidth?: number
  isCheck?: boolean
  textSize?: number
  text: string
  mode: 'checkbox' | 'radio'
  onChange?: (checked: boolean) => void
}

export default function ButtonWithText({
  ButtonSize = 24,
  ButtonStrokeWidth = 2,
  isCheck: initialIsCheck = false,
  textSize = 16,
  text,
  mode,
  onChange,
}: ButtonWithTextProps) {
  const [isChecked, setIsChecked] = useState(initialIsCheck)

  const handleClick = useCallback(() => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    onChange?.(newCheckedState)
  }, [isChecked, onChange])

  return (
    <ButtonWithTextView
      ButtonSize={ButtonSize}
      ButtonStrokeWidth={ButtonStrokeWidth}
      isCheck={isChecked}
      textSize={textSize}
      text={text}
      mode={mode}
      onClick={handleClick}
    />
  )
}
