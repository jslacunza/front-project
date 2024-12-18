const Style = {
  gameCard: {
    container: 'rounded-t-xl',
    image: 'hover:scale-110 transition'
  },
  gameCart: {
    container: '',
    image: ''
  }
}

export const ImageContainer = ({ style }:{ style: 'gameCard' | 'gameCart'}) => {

  return (
    <div className={`overflow-hidden ${Style[style].container}`} >
      <img className={Style[style].image} src='https://placehold.co/332x240' alt='image-game'/>
    </div>
  )
}