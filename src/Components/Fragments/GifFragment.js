import React from 'react';

const GifFragment = ({url,height = "7rem"}) => {
  return (
      <img src={url} alt="Animated GIF" style={{height:height}}/>
  );
};

export default GifFragment;
