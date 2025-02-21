interface HeaderViewProps {
  text: string
  mobileText: string
  textSize: number
  height: number
  color: string
  textColor: string
}

export function HeaderView({ mobileText, text, textSize, height, color, textColor }: HeaderViewProps) {
  return (
    <header
      style={{
        backgroundColor: color,
        height,
      }}
      className="flex w-full items-center px-8"
    >
      <h1
        style={{
          fontSize: textSize,
          color: textColor,
        }}
        className="w-full text-center font-bold md:text-left"
      >
        {/* モバイルとPCで異なるテキストを表示 */}
        <span className="hidden md:inline">{text}</span>
        <span className="md:hidden">{mobileText}</span>
      </h1>
    </header>
  )
}
