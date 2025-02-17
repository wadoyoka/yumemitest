'use client'

import { HeaderView } from './HeaderView'

interface HeaderProps {
  text: string
  mobileText: string
  textSize: number
  height: number
  color: string
  textColor: string
}

export default function Header({
  text = 'YUMEMI_TEST',
  mobileText = 'YUMEMI',
  textSize = 24,
  height = 60,
  color = '#3DA9FC',
  textColor = '#FFFFFF',
}: HeaderProps) {
  return (
    <HeaderView
      textSize={textSize}
      height={height}
      color={color}
      textColor={textColor}
      text={text}
      mobileText={mobileText}
    />
  )
}
