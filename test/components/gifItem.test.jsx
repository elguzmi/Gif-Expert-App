import { render , screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"; // importo el compoente

describe("Pruebas en <GifItem />", () => {

  const title = "GifItem";
  const url = "https://firebasestorage.googleapis.com/v0/b/portafolio-develop.appspot.com/o/pictures%2Fcharp.jpg?alt=media&token=1791869b-9e0c-4967-9345-e9662e0c1a3f";

  test("debe de hacer match con el snapshot", () => {      
    // Renderizar el git item
    const { container } = render(<GifItem title={title} url={url} />);

    // expect es una funcion que recibe un valor y retorna un booleano
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />); // renderizar el componente
    // screen.debug();
    //console.log(screen.getByRole("img")); // consigue la imagen del screen
    //expect(screen.getByRole("img").src).toBe(url);

    const { src , alt } = screen.getByRole("img");
    expect(src).toBe(url)    
    expect(alt).toBe(alt)    
  })

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  
  }) 
  
});