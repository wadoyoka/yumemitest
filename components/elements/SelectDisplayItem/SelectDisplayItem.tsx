import type { SelectDisplayItemProps } from '@/components/elements/SelectDisplayItem/SelectDisplayItemProps'
import { SelectDisplayItemView } from './SelectDisplayItemView'

export default function SelectDisplayItem({
  text,
  textSize = 16,
  textColor = '#1F2937',
  hoverTextColor = '#FFFFFF',
  baseColor = '#FFFFFF',
  hoverColor = '#3B82F6',
}: SelectDisplayItemProps) {
  return (
    <SelectDisplayItemView
      text={text}
      textSize={textSize}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      baseColor={baseColor}
      hoverColor={hoverColor}
    />
  )
}
