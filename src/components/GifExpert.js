import React, { useState } from 'react';
import Addcategory from './Addcategory';
import GifGrid from './GifGrid';

const GifExpert = () => {

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

const api_key = 'F66xJDyIiesFVJxeZPLpoABB3Hv6A81w';
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

const [categories, setCategories] = useState([]);

const handleAddCategory = (newCategory) =>{
   
    setCategories([ newCategory,...categories]);
    //setCategories(categories => [...categories, "El hombre pene"]);
}

  return (
      <>
        <h1>Gif Expert App</h1>
        <Addcategory handleAddCategory = { handleAddCategory }/>
        <hr/>
       
        {/* <button onClick={handleAdd}>Agregar</button> */}
            <ul>
            {categories.map(category =>{

                return <GifGrid key={category} category={category}/>
                })}
            </ul>
            <button onClick={ ()=> setCategories([]) }>Reset Categories</button>
        
      </>
  );
};

export default GifExpert;

