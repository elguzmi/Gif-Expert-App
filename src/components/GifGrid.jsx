import PropTypes from 'prop-types'
import { GifItem } from "./index";
import { useFetchGifs } from '../hooks/useFetchGifs'


//Peticion http para traer info del API
//

export const GifGrid = ({ category }) => {
  
  const {images, isLoading} = useFetchGifs(category)

// No colocar la funcion directamente en el functional componente por el ciclo de vida ya que vuelve a crearla en memoria, asi evita

  // Cada vez que surgue un cambio react vuelve a renderizar el componente 
  /* 
    Se disparaba 2 veces porque el react.strictmode se encarga de renderizar 2 veces el componente para detectar errores
    para evitar esto se puede quitar el react.strictmode en el main.jsx
  */

   return(
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }
        <div className='card-grid'>
          {
            images.map((image)=>(
              <GifItem key={image.id}
              {...image}  // todas las propiedades del objeto image las estoy esparciendo en el componente GifItem
              />
            ))
          }
        </div>
    </>
   )
}

GifGrid.propTypes ={
  category : PropTypes.string.isRequired
}


