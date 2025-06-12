import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

   return(
    <>
    <p>Hola mundo {category}</p>
    </>
   )
}

GifGrid.propTypes ={
  category : PropTypes.string.isRequired
}
export default GifGrid
