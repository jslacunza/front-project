export const PageTitle = ({
  text,
  subtitle
} : {
  text: string
  subtitle?: string
}) => {
  return (
    <div>
      <h1 className='text-4xl font-bold'>{text}</h1>
      {subtitle && (
        <h2>{subtitle}</h2>
      )}
    </div>
  )
}