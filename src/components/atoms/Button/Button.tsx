enum Style {
  border = 'bg-transparent border border-stroke-dark',
  dark = 'bg-button-dark text-white'
}

export const Button = ({
  text = 'Button',
  style = 'border',
  width = 'full',
}:{
  text: string
  style: 'border' | 'dark'
  width: string
}) => {
  return (
    <button className={`w-${width} h-14 rounded-lg ${Style[style]}`}>
      {text}
    </button>
  )
}