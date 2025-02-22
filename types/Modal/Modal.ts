import type { Prefecture } from '../Prefecture/Prefecture'

export interface PrefectureSelectModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (selected: number[]) => void
  prefectures: Prefecture[]
  filteredPrefectures: Prefecture[]
  currentSelected: number[]
  onCheckChange: (prefCode: number, indexes: number[]) => void
  onSearch: (results: Prefecture[]) => void
}
