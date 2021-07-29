import React, { lazy, Suspense } from 'react';

export interface Iprops {
  src: string;
  describe: string;
  hashtag: string;
  userId: number;
  userName: string;
  userPic: string;
}

const LazyVideo = lazy(() => import('./LazyVideo')); // 이미지를 그리는 컴포넌트를 lazy 시켰습니다. lazy는 동적 import를 사용하는 함수를 인자로 넣어줘야합니다.

const LazyItem = ({
  src,
  describe,
  hashtag,
  userId,
  userName,
  userPic,
}: Iprops) => {
  return (
    <div>
      <Suspense fallback={<div>...loading</div>}>
        <LazyVideo
          src={src}
          describe={describe}
          hashtag={hashtag}
          userId={userId}
          userName={userName}
          userPic={userPic}
        />
        <div>{userName}</div>
        <img src={userPic} alt="alt" />
      </Suspense>
      {describe}
      {hashtag}
    </div>
  );
};

export default LazyItem;
