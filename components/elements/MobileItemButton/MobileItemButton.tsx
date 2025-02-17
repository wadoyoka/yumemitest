'use client'

import type { MobileItemButtonProps } from '@/components/elements/MobileItemButton/MobileItemButtonProps'
import { MobileItemButtonView } from './MobileItemButtonView'

export default function MobileItemButton({
  rightIconSize = 24,
  rightIconStrokeWidth = 2,
  rightIconColor = '#6B7280',
  rightIconHoverColor = '#374151',
  hoverColor = '#F3F4F6',
  baseColor = '#E5E7EB',
  text,
  textSize = 16,
  textColor = '#1F2937',
  hoverTextColor = '#111827',
  borderWidth = 1,
  borderColor = '#D1D5DB',
  onClick,
  variant = 'chevron',
}: MobileItemButtonProps) {
  return (
    <MobileItemButtonView
      rightIconSize={rightIconSize}
      rightIconStrokeWidth={rightIconStrokeWidth}
      rightIconColor={rightIconColor}
      rightIconHoverColor={rightIconHoverColor}
      hoverColor={hoverColor}
      baseColor={baseColor}
      text={text}
      textSize={textSize}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      onClick={onClick}
      variant={variant}
    />
  )
}
