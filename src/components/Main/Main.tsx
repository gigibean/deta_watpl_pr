import React from 'react';
import { videos } from 'data/videos';
import { users } from 'data/users';
import LazyItem from './LazyItem';

const Main = () => {
  return (
    <>
      <div>
        {videos.map((video) => (
          <LazyItem
            key={video.id}
            src={video.src}
            describe={video.describe}
            hashtag={video.hashtag}
            userId={video.userId}
            userName={users[video.userId].name}
            userPic={users[video.userId].picture}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
