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
          hoverColor={hoverColor}
          borderColor={borderColor}
          borderWidth={1}
        />
      ))}
      <PlusButton
        plusSize={plusSize}
        plusStrokeWidth={Number(plusStrokeWidth)}
        plusColor={plusColor}
        plusHoverColor={plusHoverColor}
        baseColor={baseColor}
        hoverColor={hoverColor}
      />
    </div>
  )
}
