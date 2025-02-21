export interface SelectDisplayItemListProps {
  items: string[]
  selectedIndex: number
  onSelect: (index: number) => void
  textSize?: number
  textColor?: string
  baseColor?: string
  borderWidth?: number
  borderColor?: string
}
