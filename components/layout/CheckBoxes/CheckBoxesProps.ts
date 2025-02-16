import { Prefecture } from '@/types/Prefecture/Prefecture'

export interface CheckBoxesProps {
  checkBoxSize: number
  checkBoxStrokeWidth: number
  checkIndexes: number[]
  textSize: number
  prefectures: Prefecture[]
  onCheckChange?: (indexes: number[]) => void
}
