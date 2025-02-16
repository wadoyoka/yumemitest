interface RadioButtonViewProps {
  size: number
  strokeWidth: number
  isSelected: boolean
  onClick: () => void
}

export function RadioButtonView({
  size,
  strokeWidth,
  isSelected,
  onClick,
}: RadioButtonViewProps) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="radio"
      aria-checked={isSelected}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `${strokeWidth}px solid black`,
        }}
      />
      {isSelected && (
        <div
          className="absolute rounded-full bg-gray-500"
          style={{
            width: size - strokeWidth * 4,
            height: size - strokeWidth * 4,
          }}
        />
      )}
    </button>
  )
}
