import MobileItemButton from '@/components/elements/MobileItemButton/MobileItemButton'
import PlusButton from '@/components/elements/PlusButton/PlusButton'
import type { PrefecturesMobileProps } from '@/components/layout/PrefecturesMobile/PrefecturesMobileProps'

type PrefecturesMobileViewProps = PrefecturesMobileProps

export function PrefecturesMobileView({
  plusSize,
  plusStrokeWidth,
  plusColor,
  plusHoverColor,
  deleteButtonSize,
  deleteButtonStrokeWidth,
  deleteButtonColor,
  deleteButtonHoverColor,
  prefectures,
  textSize,
  textColor,
  hoverTextColor,
  baseColor,
  hoverColor,
  borderColor,
  onPlusClick,
  onDeleteClick,
}: PrefecturesMobileViewProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {prefectures.map((prefecture, index) => (
        <MobileItemButton
          key={index}
          text={prefecture}
          variant="close"
          rightIconSize={deleteButtonSize}
          rightIconStrokeWidth={Number(deleteButtonStrokeWidth)}
          rightIconColor={deleteButtonColor}
          rightIconHoverColor={deleteButtonHoverColor}
          textSize={textSize}
          textColor={textColor}
          hoverTextColor={hoverTextColor}
          baseColor={baseColor}
          hoverColor={baseColor}
          borderColor={borderColor}
          borderWidth={1}
          onClick={() => onDeleteClick?.(prefecture)}
        />
      ))}
      <PlusButton
        plusSize={plusSize}
        plusStrokeWidth={Number(plusStrokeWidth)}
        plusColor={plusColor}
        plusHoverColor={plusHoverColor}
        baseColor={baseColor}
        hoverColor={hoverColor}
        onClick={onPlusClick}
      />
    </div>
  )
}
