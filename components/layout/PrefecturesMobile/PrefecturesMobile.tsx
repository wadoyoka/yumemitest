'use client'

import type { PrefecturesMobileProps } from '@/components/layout/PrefecturesMobile/PrefecturesMobileProps'
import { PrefecturesMobileView } from './PrefecturesMobileView'

export default function PrefecturesMobile({
  plusSize = 24,
  plusStrokeWidth = '2',
  plusColor = '#6B7280',
  plusHoverColor = '#374151',
  deleteButtonSize = 24,
  deleteButtonStrokeWidth = '2',
  deleteButtonColor = '#6B7280',
  deleteButtonHoverColor = '#374151',
  prefectures = [],
  textSize = 16,
  textColor = '#1F2937',
  hoverTextColor = '#111827',
  baseColor = '#E5E7EB',
  hoverColor = '#F3F4F6',
  borderColor = '#D1D5DB',
  onPlusClick,
  onDeleteClick,
}: PrefecturesMobileProps) {
  return (
    <PrefecturesMobileView
      plusSize={plusSize}
      plusStrokeWidth={plusStrokeWidth}
      plusColor={plusColor}
      plusHoverColor={plusHoverColor}
      deleteButtonSize={deleteButtonSize}
      deleteButtonStrokeWidth={deleteButtonStrokeWidth}
      deleteButtonColor={deleteButtonColor}
      deleteButtonHoverColor={deleteButtonHoverColor}
      prefectures={prefectures}
      textSize={textSize}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      baseColor={baseColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      onPlusClick={onPlusClick}
      onDeleteClick={onDeleteClick}
    />
  )
}
