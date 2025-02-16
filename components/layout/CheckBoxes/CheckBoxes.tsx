'use client'

import type { CheckBoxesProps } from '@/components/layout/CheckBoxes/CheckBoxesProps'
import { useCallback, useState } from 'react'
import { CheckBoxesView } from './CheckBoxesView'

export default function CheckBoxes({
  checkBoxSize = 24,
  checkBoxStrokeWidth = 2,
  checkIndexes: initialCheckIndexes = [],
  textSize = 16,
  prefectures,
  onCheckChange,
}: CheckBoxesProps) {
  const [checkedIndexes, setCheckedIndexes] = useState<number[]>(initialCheckIndexes)

  const handleCheck = useCallback(
    (prefCode: number) => {
      setCheckedIndexes((prev) => {
        const newIndexes = prev.includes(prefCode) ? prev.filter((index) => index !== prefCode) : [...prev, prefCode]
        onCheckChange?.(newIndexes)
        return newIndexes
      })
    },
    [onCheckChange],
  )

  return (
    <CheckBoxesView
      checkBoxSize={checkBoxSize}
      checkBoxStrokeWidth={checkBoxStrokeWidth}
      checkIndexes={checkedIndexes}
      textSize={textSize}
      prefectures={prefectures}
      onCheck={handleCheck}
    />
  )
}
