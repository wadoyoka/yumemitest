export interface SelectDisplayItemListProps {
  items: string[]
  textSize: number
  textColor: string
  hoverTextColor: string
  baseColor: string
  hoverColor: string
  borderWidth: number
  borderColor: string
  selectedIndex?: number
  onSelect?: (index: number) => void
}
