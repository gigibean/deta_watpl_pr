import React from 'react';
import { Iprops } from './LazyItem';

const LazyVideo = ({ src }: Iprops) => {
  return (
    <div style={{ width: '50%' }}>
      <video autoPlay muted loop width="100%" height="100%" controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default LazyVideo;
