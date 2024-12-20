enum Style {
  border = 'bg-transparent border border-stroke-dark',
  dark = 'bg-button-dark text-white'
}

interface ButtonProps {
  text: string
  style: 'border' | 'dark'
  width: string
  onClick?: () => void
}

export const Button = ({
  text = 'Button',
  style = 'border',
  width = 'full',
  onClick
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`w-${width} h-14 rounded-lg ${Style[style]}`}>
      {text}
    </button>
  )
}