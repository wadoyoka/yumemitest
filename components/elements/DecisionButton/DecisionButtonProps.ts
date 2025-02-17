export interface DecisionButtonProps {
  width: number
  height: number
  borderColor: string
  borderWidth: number
  baseColor: string
  hoverColor: string
  text: string
  textSize: number
  textColor: string
  hoverTextColor: string
  submitText: string
  onClick?: () => Promise<void>
}
