import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import getGifs from '../helpers/getGifs';
import useFetchGifs from '../Hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    
// const [images, setImages] = useState([]);

// useEffect(()=>{
//      getGifs(category).then(images=> setImages(images));
// },[category])

const {data:images,loading} = useFetchGifs( category );


  return(
      <>
      
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>
        {loading && <p className="animate__animated animate__flash">loading...</p> }
        
      <div className="card-grid">
        
            {images.map(image=>{
                return <GifGridItem key={image.id} {...image}/>
                
            })}
        
      </div>
      </>
  )
};

export default GifGrid;
