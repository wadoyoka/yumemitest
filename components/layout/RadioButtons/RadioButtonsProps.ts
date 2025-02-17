export interface RadioButtonsProps {
  size: number
  radioButtonStrokeWidth: number
  textSize: number
  textDatas: string[]
  selectIndex: number
  onSelectChange?: (index: number) => void
}
