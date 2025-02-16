'use client'

import type { RadioButtonsProps } from '@/components/layout/RadioButtons/RadioButtonsProps'
import { useCallback } from 'react'
import { RadioButtonsView } from './RadioButtonsView'

export default function RadioButtons({
  size = 24,
  radioButtonStrokeWidth = 2,
  textSize = 16,
  textDatas,
  selectIndex,
  onSelectChange,
}: RadioButtonsProps) {
  const handleSelect = useCallback(
    (index: number) => {
      if (index !== selectIndex) {
        // 現在選択されている項目と異なる場合のみ更新
        onSelectChange?.(index)
      }
    },
    [selectIndex, onSelectChange],
  )

  return (
    <RadioButtonsView
      size={size}
      radioButtonStrokeWidth={radioButtonStrokeWidth}
      textSize={textSize}
      textDatas={textDatas}
      selectIndex={selectIndex}
      onSelect={handleSelect}
    />
  )
}
