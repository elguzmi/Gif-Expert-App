import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


// Un hook es una funcion que regresa un objeto con propiedades y metodos
export const useFetchGifs = (category) => {
  
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async ()=>{
    const newImages = await getGifs(category)
    //Gracias a react 18 esto solo dispara una renderizacion
    await new Promise(resolve => setTimeout(resolve, 2000))
    setImages(newImages)
    setIsLoading(false)
    
  }
 
  // use efecto segundario es un hook que se ejecuta cuando se renderiza el componente
  useEffect(() => {
    getImages()
  }, []) // dependencias , solo se dispara la primera vez que se crea


  return {
    images,
    isLoading
  }
}
