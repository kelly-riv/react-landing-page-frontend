import React from 'react';

const GifFragment = ({url}) => {
  return (
    <div>
      <img src={url} alt="Animated GIF" style={{height:"7rem"}}/>
    </div>
  );
};

export default GifFragment;
