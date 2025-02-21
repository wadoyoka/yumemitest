'use client'

import type { CheckBoxesProps } from '@/components/layout/CheckBoxes/CheckBoxesProps'
import { CheckBoxesView } from './CheckBoxesView'

export default function CheckBoxes({
  checkBoxSize = 24,
  checkBoxStrokeWidth = 2,
  checkIndexes = [],
  textSize = 16,
  prefectures,
  onCheckChange,
}: CheckBoxesProps) {
  const handleCheck = (prefCode: number) => {
    const newIndexes = checkIndexes.includes(prefCode)
      ? checkIndexes.filter((index) => index !== prefCode)
      : [...checkIndexes, prefCode]
    onCheckChange?.(prefCode, newIndexes)
  }

  return (
    <CheckBoxesView
      checkBoxSize={checkBoxSize}
      checkBoxStrokeWidth={checkBoxStrokeWidth}
      checkIndexes={checkIndexes}
      textSize={textSize}
      prefectures={prefectures}
      onCheck={handleCheck}
    />
  )
}
