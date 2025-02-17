export interface MobileItemButtonProps {
  rightIconSize: number
  rightIconStrokeWidth: number
  rightIconColor: string
  rightIconHoverColor: string
  hoverColor: string
  baseColor: string
  text: string
  textSize: number
  textColor: string
  hoverTextColor: string
  borderWidth: number
  borderColor: string
  onClick?: () => void
  variant?: 'chevron' | 'close'
}
