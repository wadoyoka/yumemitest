'use client'

import { CheckBoxView } from '@/components/elements/CheckBox/CheckBoxView'
import { useCallback, useState } from 'react'

interface CheckBoxProps {
  size?: number
  strokeWidth?: number
  isCheck?: boolean
  onChange?: (checked: boolean) => void
}

export default function CheckBox({
  size = 24,
  strokeWidth = 2,
  isCheck: initialIsCheck = false,
  onChange,
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(initialIsCheck)

  const handleClick = useCallback(() => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    onChange?.(newCheckedState)
  }, [isChecked, onChange])

  return (
    <CheckBoxView
      size={size}
      strokeWidth={strokeWidth}
      isCheck={isChecked}
      onClick={handleClick}
    />
  )
}
