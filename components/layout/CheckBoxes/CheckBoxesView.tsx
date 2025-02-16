import ButtonWithText from '@/components/elements/ButtonWithText/ButtonWithText'
import { CheckBoxesProps } from '@/components/layout/CheckBoxes/CheckBoxesProps'

interface CheckBoxesViewProps extends Omit<CheckBoxesProps, 'onCheckChange'> {
  onCheck: (prefCode: number) => void
}

export function CheckBoxesView({
  checkBoxSize,
  checkBoxStrokeWidth,
  checkIndexes,
  textSize,
  prefectures,
  onCheck,
}: CheckBoxesViewProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {prefectures.map((prefecture) => (
        <ButtonWithText
          key={prefecture.prefCode}
          ButtonSize={checkBoxSize}
          ButtonStrokeWidth={checkBoxStrokeWidth}
          isCheck={checkIndexes.includes(prefecture.prefCode)}
          textSize={textSize}
          text={prefecture.prefName}
          mode="checkbox"
          onChange={() => onCheck(prefecture.prefCode)}
        />
      ))}
    </div>
  )
}
