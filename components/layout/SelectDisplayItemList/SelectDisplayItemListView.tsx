'use client'

import type { SelectDisplayItemListProps } from '@/components/layout/SelectDisplayItemList/SelectDisplayItemListProps'
import { ChevronDown } from 'lucide-react'

export function SelectDisplayItemListView({
  items,
  selectedIndex,
  onSelect,
  textSize = 16,
  textColor = '#1F2937',
  baseColor = '#FFFFFF',
  borderWidth = 1,
  borderColor = '#D1D5DB',
}: SelectDisplayItemListProps) {
  return (
    <div className="relative inline-block w-full">
      <div className="relative">
        <select
          value={selectedIndex}
          onChange={(e) => onSelect(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none rounded-lg pr-10 focus:outline-none"
          style={{
            fontSize: `${textSize}px`,
            color: textColor,
            backgroundColor: baseColor,
            border: `${borderWidth}px solid ${borderColor}`,
            padding: '0.5rem 1rem',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
          }}
        >
          {items.map((item, index) => (
            <option
              key={index}
              value={index}
              className="max-w-full truncate"
              style={{
                backgroundColor: baseColor,
                color: textColor,
                padding: '0.5rem 1rem',
              }}
            >
              {item}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2"
          style={{ color: textColor }}
        />
      </div>
    </div>
  )
}
