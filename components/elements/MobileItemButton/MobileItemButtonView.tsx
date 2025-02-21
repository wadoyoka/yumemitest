'use client'

import type React from 'react'

import type { MobileItemButtonProps } from '@/components/elements/MobileItemButton/MobileItemButtonProps'
import { ChevronDown, X } from 'lucide-react'

export function MobileItemButtonView({
  rightIconSize,
  rightIconStrokeWidth,
  rightIconColor,
  rightIconHoverColor,
  hoverColor,
  baseColor,
  text,
  textSize,
  textColor,
  hoverTextColor,
  borderWidth,
  borderColor,
  onClick,
  variant,
}: MobileItemButtonProps) {
  const commonStyles = {
    backgroundColor: baseColor,
    border: `${borderWidth}px solid ${borderColor}`,
  }

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = hoverColor
    const icon = e.currentTarget.querySelector('svg')
    const textElement = e.currentTarget.querySelector('span')
    if (icon) icon.style.stroke = rightIconHoverColor
    if (textElement) textElement.style.color = hoverTextColor
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = baseColor
    const icon = e.currentTarget.querySelector('svg')
    const textElement = e.currentTarget.querySelector('span')
    if (icon) icon.style.stroke = rightIconColor
    if (textElement) textElement.style.color = textColor
  }

  if (variant === 'close') {
    return (
      <div
        className="flex w-full items-center justify-between rounded-lg px-4 py-2 transition-colors duration-200"
        style={commonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span
          style={{
            fontSize: `${textSize}px`,
            color: textColor,
            transition: 'color 0.2s',
          }}
        >
          {text}
        </span>
        <button onClick={onClick} className="focus:outline-none" aria-label="削除">
          <X
            size={rightIconSize}
            strokeWidth={rightIconStrokeWidth}
            color={rightIconColor}
            style={{ transition: 'color 0.2s' }}
          />
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-lg px-4 py-2 transition-colors duration-200"
      style={commonStyles}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span
        style={{
          fontSize: `${textSize}px`,
          color: textColor,
          transition: 'color 0.2s',
        }}
      >
        {text}
      </span>
      <ChevronDown
        size={rightIconSize}
        strokeWidth={rightIconStrokeWidth}
        color={rightIconColor}
        style={{ transition: 'color 0.2s' }}
      />
    </button>
  )
}
