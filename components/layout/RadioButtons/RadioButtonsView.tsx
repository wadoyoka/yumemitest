import ButtonWithText from '@/components/elements/ButtonWithText/ButtonWithText'
import type { RadioButtonsProps } from '@/components/layout/RadioButtons/RadioButtonsProps'

interface RadioButtonsViewProps extends Omit<RadioButtonsProps, 'onSelectChange'> {
  onSelect?: (index: number) => void
}

export function RadioButtonsView({
  size,
  radioButtonStrokeWidth,
  textSize,
  textDatas,
  selectIndex,
  onSelect,
}: RadioButtonsViewProps) {
  return (
    <div className="flex flex-wrap gap-4 max-md:hidden" role="radiogroup" aria-label="選択オプション">
      {textDatas.map((text, index) => (
        <ButtonWithText
          key={index}
          ButtonSize={size}
          ButtonStrokeWidth={radioButtonStrokeWidth}
          isCheck={index === selectIndex}
          textSize={textSize}
          text={text}
          mode="radio"
          onChange={() => onSelect?.(index)}
        />
      ))}
    </div>
  )
}
