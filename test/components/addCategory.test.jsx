import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {

    test("debe de cambiar el valor de la caja de texto", () => {
        render(<AddCategory onNewCategory={()=>{}} />);  // renderizar el componente de add category
        //screen.debug();
        const input = screen.getByRole("textbox"); // porque solo hay uno
        fireEvent.input(input , { target :{value : 'saitama'}})
        expect(input.value).toBe('saitama')
    });

    test("debe llamar on new category si el input tiene un valor", ()=>{
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn(); // es una funcion que esta marcada como mock , es decir una simulacion de la funcion

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input , { target :{value : inputValue}})
        fireEvent.submit( form );
        //screen.debug()
        expect(input.value).toBe(''); // tiene que ser vacio
        expect( onNewCategory ).toHaveBeenCalled(); // Valida que haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // Valida que haya sido llamada una vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Valida que haya sido llamada con el valor del input
    })

    test('No debe de llamar onNewCategory si el input esta vacio', ()=>{
        const inputValue = ''
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target : { value: inputValue }  })
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
});

