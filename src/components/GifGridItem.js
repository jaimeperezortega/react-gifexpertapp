import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({title, url, id}) => {
    
    
  return <div className="card animate__animated animate__fadeIn ">
      <p>{ title }</p>
      <img src = { url } alt={ title }/>
      
  </div>;
};

GifGridItem.propTypes = {};

export default GifGridItem;
