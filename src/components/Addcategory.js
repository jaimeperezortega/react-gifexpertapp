import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Addcategory = ({ handleAddCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) =>{
        //e.preventDefault(); ESTO ES PARA EL SUBMIT CAPULLO
        setInputValue(e.target.value);

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue){
            handleAddCategory(inputValue);
            setInputValue("");
        }

    }

  return (
  
  <form onSubmit = { handleSubmit }>
    
    <input
        type="text"
        value= { inputValue }
        onChange ={ handleInputChange }
        onSubmit = { handleSubmit }
    />

    <button type ="submit">Add Category</button>

</form>

  );
};

Addcategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired
}

export default Addcategory;
