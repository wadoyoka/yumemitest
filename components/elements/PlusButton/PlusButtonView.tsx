'use client'

import type { PlusButtonProps } from '@/components/elements/PlusButton/PlusButtonProps'
import { Plus } from 'lucide-react'

export function PlusButtonView({
  plusSize,
  plusStrokeWidth,
  plusColor,
  plusHoverColor,
  baseColor,
  hoverColor,
  onClick,
}: PlusButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center rounded-lg py-2 transition-colors duration-200"
      style={{
        backgroundColor: baseColor,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor
        const icon = e.currentTarget.querySelector('svg')
        if (icon) icon.style.stroke = plusHoverColor
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = baseColor
        const icon = e.currentTarget.querySelector('svg')
        if (icon) icon.style.stroke = plusColor
      }}
    >
      <Plus size={plusSize} strokeWidth={plusStrokeWidth} color={plusColor} style={{ transition: 'color 0.2s' }} />
    </button>
  )
}
