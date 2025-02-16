import { Check } from 'lucide-react'

interface CheckBoxViewProps {
  size: number
  strokeWidth: number
  isCheck: boolean
  onClick: () => void
}

export function CheckBoxView({
  size,
  strokeWidth,
  isCheck,
  onClick,
}: CheckBoxViewProps) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="checkbox"
      aria-checked={isCheck}
    >
      <div
        className={`absolute inset-0 ${isCheck ? 'bg-black' : 'bg-white'}`}
        style={{
          border: `${strokeWidth}px solid black`,
        }}
      />
      {isCheck && (
        <Check
          className="relative z-10 text-white"
          style={{
            width: size * 0.6,
            height: size * 0.6,
            strokeWidth,
          }}
        />
      )}
    </button>
  )
}
