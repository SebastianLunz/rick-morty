import React from 'react';
import rickAndMorty from '../../images/rickAndMorty.png'

const Logo = (props) => {
  return (
    <img src={rickAndMorty} {...props} alt='Rick & Morty Series' style={{display: "inline-block"}}/>
  );
};

export default Logo;