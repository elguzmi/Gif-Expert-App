import { useState } from "react"

const GifExpertApp = () => {

    const [ categories , setCategories ] =  useState(['Mario Bros' , 'dragon ball']); // [] simepre va a ser un arreglo
    console.log(categories)

    const onAddCategory = ()=>{
        // react trata de no mutar le estado
        setCategories( [ 'Valorant' ,... categories ] )
        console.log(categories)
    }

  return (
    <>
        {/* titulo de la app */}
      <h1>GifExpertApp</h1>

      {/* Input */}
        <input type="text" />

      <button onClick={ onAddCategory }>Agregar</button>


      {/* Listado de Gif */}
      <ol>
        { categories.map( (category, index) => {
            return <li key={index}>{ category}</li>
        }) }
        {/* <li >ABC</li> */}
      </ol>
        {/* Gif item */}
    </>
  )
}

export default GifExpertApp
