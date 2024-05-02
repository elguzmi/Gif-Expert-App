import { useState } from "react"
import { AddCategory } from './components/AddCategory'
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [ categories , setCategories ] =  useState(['Mario Bros' , 'dragon ball']); // [] simepre va a ser un arreglo
    console.log(categories)

    const onAddCategory = ( newCategory )=>{
        // react trata de no mutar le estado

      // condicion para evitar duplicados
      if( categories.indexOf(newCategory) >= 0 ) return;

        setCategories( [ newCategory ,... categories ] )
        //setCategories( cat => [ newCategory , ...cat ])
        console.log(categories)
    }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* porpiedad de add catgeory que va a recibir esa funcion */}
      {/* cuando lleva la palabra On es porque est emitiendo algo */}
      <AddCategory  
        onNewCategory = { ( value ) => onAddCategory( value )}
        //  onAddCategories={ setCategories }
      />  
        

      <button onClick={ onAddCategory }>Agregar</button>

      {/* Listado de Gif */}
      {/* no hay que usar el indice porque react utiliza el valor de la llave cuando un elemento se elimino */}
      { categories.map( (category, index) => 
          (
            <GifGrid key={ category } category={ category }  ></GifGrid>
            // <div key={ category }>
            //   <h3>{ category }</h3>
            //   <li >{ category}</li>
            // </div>
          )
      ) }
        {/* Gif item */}
    </>
  )
}

export default GifExpertApp
