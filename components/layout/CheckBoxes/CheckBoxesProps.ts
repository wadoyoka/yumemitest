import type { Prefecture } from '@/types/Prefecture/Prefecture'

export interface CheckBoxesProps {
  checkBoxSize: number
  checkBoxStrokeWidth: number
  checkIndexes: number[]
  textSize: number
  prefectures: Prefecture[]
  onCheckChange?: (prefcode: number, indexes: number[]) => void
}
