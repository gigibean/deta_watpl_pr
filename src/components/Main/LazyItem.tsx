import React, { lazy, Suspense } from 'react';

export interface Iprops {
  src: string;
  name: string;
}

const LazyVideo = lazy(() => import('./LazyVideo')); // 이미지를 그리는 컴포넌트를 lazy 시켰습니다. lazy는 동적 import를 사용하는 함수를 인자로 넣어줘야합니다.

const LazyItem = ({ src, name }: Iprops) => {
  return (
    <div>
      <Suspense fallback={<div>...loading</div>}>
        <LazyVideo src={src} name={name} />
      </Suspense>
      {name}
    </div>
  );
};

export default LazyItem;
