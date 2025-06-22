import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
      <img src={url} alt={title} width={100} />
      <p>{title}</p>
    </div>
  )
}

// required es para que los parametros o props sean requeridos
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
