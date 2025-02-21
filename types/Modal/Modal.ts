import type { Prefecture } from '../Prefecture/Prefecture'

export interface PrefectureSelectModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (selectedPrefCodes: number[]) => void
  prefectures: Prefecture[]
  currentSelected: number[]
  onCheckChange: (prefCode: number, indexes: number[]) => void
}
