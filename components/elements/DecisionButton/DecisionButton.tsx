'use client'

import type { DecisionButtonProps } from '@/components/elements/DecisionButton/DecisionButtonProps'
import { useState } from 'react'
import { DecisionButtonView } from './DecisionButtonView'

export default function DecisionButton({
  width = 240,
  height = 48,
  borderColor = '#3B82F6',
  borderWidth = 2,
  baseColor = '#3B82F6',
  hoverColor = '#FFFFFF',
  text = '決定',
  textSize = 16,
  textColor = '#FFFFFF',
  hoverTextColor = '#3B82F6',
  submitText = '送信中',
  onClick,
}: DecisionButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (isLoading || !onClick) return

    setIsLoading(true)
    try {
      await onClick()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DecisionButtonView
      width={width}
      height={height}
      borderColor={borderColor}
      borderWidth={borderWidth}
      baseColor={baseColor}
      hoverColor={hoverColor}
      text={text}
      textSize={textSize}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      submitText={submitText}
      isLoading={isLoading}
      onClick={handleClick}
    />
  )
}
