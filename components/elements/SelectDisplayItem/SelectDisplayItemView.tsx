'use client'

import type { SelectDisplayItemProps } from '@/components/elements/SelectDisplayItem/SelectDisplayItemProps'

type SelectDisplayItemViewProps = SelectDisplayItemProps

export function SelectDisplayItemView({
  text,
  textSize,
  textColor,
  hoverTextColor,
  baseColor,
  hoverColor,
}: SelectDisplayItemViewProps) {
  return (
    <div
      className="w-full cursor-pointer px-4 py-2 transition-colors duration-200"
      style={{
        backgroundColor: baseColor,
        fontSize: `${textSize}px`,
        color: textColor,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor
        e.currentTarget.style.color = hoverTextColor
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = baseColor
        e.currentTarget.style.color = textColor
      }}
      role="option"
    >
      {text}
    </div>
  )
}
