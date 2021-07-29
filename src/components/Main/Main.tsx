import React from 'react';
import { videos } from 'data/videos';
import LazyItem from './LazyItem';

const Main = () => {
  return (
    <div>
      {videos.map((video) => (
        <LazyItem key={video.id} src={video.src} name={video.name} />
      ))}
    </div>
  );
};

// type AppProps = {
//   message: string;
// };

// const Greettng = ({ message }: AppProps) => {
//   <div>{message}</div>;
// };

export default Main;
