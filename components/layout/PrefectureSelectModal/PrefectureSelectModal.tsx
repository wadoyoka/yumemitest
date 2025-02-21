'use client'

import DecisionButton from '@/components/elements/DecisionButton/DecisionButton'
import CheckBoxes from '@/components/layout/CheckBoxes/CheckBoxes'
import type { PrefectureSelectModalProps } from '@/types/Modal/Modal'
import { X } from 'lucide-react'

export default function PrefectureSelectModal({
  isOpen,
  onClose,
  onConfirm,
  prefectures,
  currentSelected,
  onCheckChange,
}: PrefectureSelectModalProps) {
  if (!isOpen) return null

  const handleConfirm = () => {
    onConfirm(currentSelected)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <h2 className="text-lg font-semibold">都道府県の選択</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100" aria-label="閉じる">
            <X className="size-5" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto px-2">
          <CheckBoxes
            checkBoxSize={20}
            checkBoxStrokeWidth={2}
            checkIndexes={currentSelected}
            textSize={14}
            prefectures={prefectures}
            onCheckChange={onCheckChange}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <DecisionButton
            width={200}
            height={40}
            borderColor="#3B82F6"
            borderWidth={2}
            baseColor="#3B82F6"
            hoverColor="#FFFFFF"
            text="決定"
            textSize={16}
            textColor="#FFFFFF"
            hoverTextColor="#3B82F6"
            submitText="送信中"
            onClick={handleConfirm}
          />
        </div>
      </div>
    </div>
  )
}
