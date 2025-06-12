import { useState } from "react"
import { AddCategory } from './components/AddCategory'
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [ categories , setCategories ] =  useState(['Mario Bros']); // [] simepre va a ser un arreglo


    const onAddCategory = ( newCategory )=>{
        // react trata de no mutar le estado
      // condicion para evitar duplicados
      if( categories.indexOf(newCategory) >= 0 ) return;
        setCategories( [ newCategory , ... categories ] )
        //setCategories( cat => [ newCategory , ...cat ])
    }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* cuando lleva la palabra On es porque est emitiendo algo */}
      <AddCategory onNewCategory = { onAddCategory }
        //  onAddCategories={ setCategories }
      />  

      

      {/* Listado de Gif */}
      {/* no hay que usar el indice porque react utiliza el valor de la llave cuando un elemento se elimino */}
      { categories.map( (category ) => 
          (
            <GifGrid key={ category } category={ category } ></GifGrid>
          )
      ) }
    </>
  )
}

export default GifExpertApp
