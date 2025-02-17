'use client'

import type { PlusButtonProps } from '@/components/elements/PlusButton/PlusButtonProps'
import { PlusButtonView } from './PlusButtonView'

export default function PlusButton({
  plusSize = 24,
  plusStrokeWidth = 2,
  plusColor = '#6B7280',
  plusHoverColor = '#374151',
  baseColor = '#E5E7EB',
  hoverColor = '#F3F4F6',
  onClick,
}: PlusButtonProps) {
  return (
    <PlusButtonView
      plusSize={plusSize}
      plusStrokeWidth={plusStrokeWidth}
      plusColor={plusColor}
      plusHoverColor={plusHoverColor}
      baseColor={baseColor}
      hoverColor={hoverColor}
      onClick={onClick}
    />
  )
}
