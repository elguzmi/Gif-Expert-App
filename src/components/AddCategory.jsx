import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {
  
  const [ inputValue , setInputValue  ]  =  useState('')  
  const onInputChange = ( ev )=>{
    //console.log(ev.target.value);
    setInputValue(ev.target.value)
  }

  const onSubmitForm = ( ev )=>{
    ev.preventDefault();
    if(inputValue.trim().length <= 1)return 
    console.log({inputValue});
    onNewCategory(inputValue.trim());
    //onAddCategories( cat => [ inputValue , ...cat  ] )
    setInputValue('')
  }
  return (
      <form action="" onSubmit={ (event)=> onSubmitForm(event) }>
        <input type="text" 
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={ onInputChange }
        />
        <button type="submit" >Agregar</button>
      </form>
    )
  }

AddCategory.propTypes ={
  onNewCategory : PropTypes.func.isRequired
}