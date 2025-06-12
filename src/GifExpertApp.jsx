import { useState } from "react"
import { AddCategory } from './components/AddCategory'
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [ categories , setCategories ] =  useState(['Mario Bros' , 'dragon ball']); // [] simepre va a ser un arreglo
    const onAddCategory = ( newCategory )=>{
        // react trata de no mutar le estado
      if( categories.indexOf(newCategory) >= 0 ) return;
        setCategories( [ newCategory ,... categories ] )
  
      }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* cuando lleva la palabra On es porque est emitiendo algo */}
      <AddCategory onNewCategory = { onAddCategory }
        //  onAddCategories={ setCategories }
      />  

      <button onClick={ onAddCategory }>Agregar</button>

      {/* Listado de Gif */}
      { categories.map( (category) => 
          (
            <GifGrid key={ category } category={ category } ></GifGrid>
          )
      ) }
    </>
  )
}

export default GifExpertApp
