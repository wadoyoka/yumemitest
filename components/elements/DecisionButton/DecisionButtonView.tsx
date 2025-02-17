import type { DecisionButtonProps } from '@/components/elements/DecisionButton/DecisionButtonProps'
import { Loader2 } from 'lucide-react'

interface DecisionButtonViewProps extends DecisionButtonProps {
  isLoading: boolean
}

export function DecisionButtonView({
  width,
  height,
  borderColor,
  borderWidth,
  baseColor,
  hoverColor,
  text,
  textSize,
  textColor,
  hoverTextColor,
  submitText,
  isLoading,
  onClick,
}: DecisionButtonViewProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="relative flex items-center justify-center rounded-lg transition-all duration-200"
      style={{
        width,
        height,
        border: `${borderWidth}px solid ${borderColor}`,
        backgroundColor: isLoading ? baseColor : baseColor,
        color: isLoading ? textColor : textColor,
        fontSize: textSize,
      }}
      onMouseOver={(e) => {
        if (!isLoading) {
          e.currentTarget.style.backgroundColor = hoverColor
          e.currentTarget.style.color = hoverTextColor
        }
      }}
      onMouseOut={(e) => {
        if (!isLoading) {
          e.currentTarget.style.backgroundColor = baseColor
          e.currentTarget.style.color = textColor
          e.currentTarget.style.borderColor = borderColor
        }
      }}
    >
      {isLoading && <Loader2 className="absolute left-4 size-5 animate-spin" />}
      {isLoading ? submitText : text}
    </button>
  )
}
