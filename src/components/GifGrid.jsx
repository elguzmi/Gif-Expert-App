import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

  //Peticion http para traer info del API
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JtCeZ7NhxNkGKoMzeu6BlIUT3IYoGFU7&q=${ category }&limit=3`
    const resp = await fetch(url)
    console.log(resp)
    const {data} = await resp.json()
    console.log(data)	
  }

  getGifs()

  //JtCeZ7NhxNkGKoMzeu6BlIUT3IYoGFU7
   return(
    <>
        <h3>{ category }</h3>
    </>
   )
}

GifGrid.propTypes ={
  category : PropTypes.string.isRequired
}
export default GifGrid

