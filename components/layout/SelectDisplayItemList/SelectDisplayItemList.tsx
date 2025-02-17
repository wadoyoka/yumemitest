'use client'

import type { SelectDisplayItemListProps } from '@/components/layout/SelectDisplayItemList/SelectDisplayItemListProps'
import { useState } from 'react'
import { SelectDisplayItemListView } from './SelectDisplayItemListView'

export default function SelectDisplayItemList({
  items,
  textSize = 16,
  textColor = '#1F2937',
  hoverTextColor = '#FFFFFF',
  baseColor = '#FFFFFF',
  hoverColor = '#3B82F6',
  borderWidth = 1,
  borderColor = '#D1D5DB',
  selectedIndex: controlledSelectedIndex,
  onSelect,
}: SelectDisplayItemListProps) {
  const [internalSelectedIndex, setInternalSelectedIndex] = useState(0)

  const selectedIndex = controlledSelectedIndex ?? internalSelectedIndex

  const handleSelect = (index: number) => {
    setInternalSelectedIndex(index)
    onSelect?.(index)
  }

  return (
    <SelectDisplayItemListView
      items={items}
      textSize={textSize}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      baseColor={baseColor}
      hoverColor={hoverColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      selectedIndex={selectedIndex}
      onSelect={handleSelect}
    />
  )
}
