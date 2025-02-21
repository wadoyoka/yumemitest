import type { SelectDisplayItemListProps } from '@/components/layout/SelectDisplayItemList/SelectDisplayItemListProps'
import { SelectDisplayItemListView } from '@/components/layout/SelectDisplayItemList/SelectDisplayItemListView'

export default function SelectDisplayItemList({
  items,
  selectedIndex,
  onSelect,
  textSize = 16,
  textColor = '#1F2937',
  baseColor = '#FFFFFF',
  borderWidth = 1,
  borderColor = '#D1D5DB',
}: SelectDisplayItemListProps) {
  return (
    <SelectDisplayItemListView
      items={items}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      textSize={textSize}
      textColor={textColor}
      baseColor={baseColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
    />
  )
}
