import SelectDisplayItem from '@/components/elements/SelectDisplayItem/SelectDisplayItem'
import type { SelectDisplayItemListProps } from '@/components/layout/SelectDisplayItemList/SelectDisplayItemListProps'

interface SelectDisplayItemListViewProps extends SelectDisplayItemListProps {
  selectedIndex: number
  onSelect: (index: number) => void
}

export function SelectDisplayItemListView({
  items,
  textSize,
  textColor,
  hoverTextColor,
  baseColor,
  hoverColor,
  borderWidth,
  borderColor,
  selectedIndex,
  onSelect,
}: SelectDisplayItemListViewProps) {
  return (
    <div
      className="w-full overflow-hidden rounded-lg"
      style={{ border: `${borderWidth}px solid ${borderColor}` }}
      role="listbox"
      aria-label="選択オプション"
    >
      {items.map((item, index) => (
        <div key={index} onClick={() => onSelect(index)} role="option" aria-selected={index === selectedIndex}>
          <SelectDisplayItem
            text={item}
            textSize={textSize}
            textColor={index === selectedIndex ? hoverTextColor : textColor}
            hoverTextColor={hoverTextColor}
            baseColor={index === selectedIndex ? hoverColor : baseColor}
            hoverColor={hoverColor}
          />
        </div>
      ))}
    </div>
  )
}
