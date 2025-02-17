import { CheckBoxView } from '@/components/elements/CheckBox/CheckBoxView'
import { RadioButtonView } from '@/components/elements/RadioButton/RadioButtonView'

interface ButtonWithTextViewProps {
  ButtonSize: number
  ButtonStrokeWidth: number
  isCheck: boolean
  textSize: number
  text: string
  mode: 'checkbox' | 'radio'
  onClick: () => void
}

export function ButtonWithTextView({
  ButtonSize,
  ButtonStrokeWidth,
  isCheck,
  textSize,
  text,
  mode,
  onClick,
}: ButtonWithTextViewProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2"
      role={mode === 'checkbox' ? 'checkbox' : 'radio'}
      aria-checked={isCheck}
    >
      {mode === 'checkbox' ? (
        <CheckBoxView
          size={ButtonSize}
          strokeWidth={ButtonStrokeWidth}
          isCheck={isCheck}
          onClick={() => {}}
        />
      ) : (
        <RadioButtonView
          size={ButtonSize}
          strokeWidth={ButtonStrokeWidth}
          isSelected={isCheck}
          onClick={() => {}}
        />
      )}
      <span
        className={`${mode == 'radio' && isCheck == false && 'text-gray-400'}`}
        style={{ fontSize: `${textSize}px` }}
      >
        {text}
      </span>
    </button>
  )
}
