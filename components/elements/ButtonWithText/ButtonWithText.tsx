'use client'

import { ButtonWithTextView } from './ButtonWithTextView'

interface ButtonWithTextProps {
  ButtonSize?: number
  ButtonStrokeWidth?: number
  isCheck: boolean // 必須に変更
  textSize?: number
  text: string
  mode: 'checkbox' | 'radio'
  onChange?: (checked: boolean) => void
}

export default function ButtonWithText({
  ButtonSize = 24,
  ButtonStrokeWidth = 2,
  isCheck, // 内部状態管理を削除
  textSize = 16,
  text,
  mode,
  onChange,
}: ButtonWithTextProps) {
  return (
    <ButtonWithTextView
      ButtonSize={ButtonSize}
      ButtonStrokeWidth={ButtonStrokeWidth}
      isCheck={isCheck}
      textSize={textSize}
      text={text}
      mode={mode}
      onClick={() => onChange?.(!isCheck)}
    />
  )
}
